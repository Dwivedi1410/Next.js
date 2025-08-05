import Link from "next/link";

// export const dynamicParams = false;

// When dynamicParams is set to true (the default), Next.js will try to generate pages for any blogID requested, even if it wasn't pre-generated at build time. 
// For example, if you only have 200 blogIDs, a user could still access /blogs/300 or /blogs/400, and Next.js would generate those pages on demand.
// However, when dynamicParams is set to false, Next.js will only generate pages for the blogIDs returned by generateStaticParams. 
// This means users cannot access pages for blogIDs that were not specified ahead of time.


// export const revalidate = 10;

// By default it's value is false (means no regeration)
// The revalidate property is used to control how often Next.js should revalidate (or refresh) the page content.
// By setting revalidate to 10, the page will be revalidated every 10 seconds.
// This means that if the page is accessed within 10 seconds of the last revalidation, the cached version will be served, and if it's older, the page will be regenerated.
// This is useful for pages that are frequently updated but don't need to be updated immediately. 

export async function generateStaticParams() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  // const data = await response.json();
  // console.log(data);
  // return data.map(({ id }) => ({ blogID: `${id}` }));

  return [
    { blogID: "1" },
    { blogID: "2" },
    { blogID: "3" },
    { blogID: "4" },
    { blogID: "5" },
  ];
}
// The generateStaticParams() function enables Next.js to pre-render static pages for dynamic routes at build time.
// By providing a list of possible route parameters (such as blog IDs), Next.js will automatically generate a static page for each specified parameter value.
// This approach is particularly useful for dynamic routes (e.g., [blogID]) where you want to serve static content for a set of known paths, improving performance and SEO.
// In this example, generateStaticParams() fetches a list of blog IDs and ensures that a static page is generated for each blog post under the /blogs/[blogID] route.

// One drawback of using static site generation (SSG) is that if your page content changes frequently, the static pages will not automatically update to reflect those changes. 
// To handle regularly updated content, you should use Incremental Static Regeneration (ISR), which allows static pages to be updated after deployment without needing to rebuild the entire site.

const Blog = async ({ params }) => {
  const { blogID } = await params;
  console.log("blogID: ", blogID);
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link active">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Welcome to Our Blog {blogID}</h1>
        <h1>Date: {new Date().toLocaleString()}</h1>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
