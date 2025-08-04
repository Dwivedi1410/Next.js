import Link from "next/link";

export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
  return data.map(({ id }) => ({ blogID: `${id}` }));
  // return [
  //   { blogID: "1" },
  //   { blogID: "2" },
  //   { blogID: "3" },
  //   { blogID: "4" },
  //   { blogID: "5" },
  // ];
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
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
