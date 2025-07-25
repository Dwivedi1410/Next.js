import Link from "next/link";


export const metadata = {
  title: "Tech Company",
  description: "This is a description of Tech Company",
}

// If you write this metadata in the page.js file then it will only apply to the page.js file.
// So if you want to define separate metadata for each page then you have to write the metadata in the profile.js file or layout.js file of that page.

export default async function Home({searchParams, params}) {
  // Each component gets a porp which is an object => contains two promises (params and searchParams)

  // console.log(await searchParams);
  // console.log(await params);

  //Both of these will give us an empty objects (we have to do await because they both are promises)
  return (
   

    <div>
      {/*
      Dynamic Routing :- Dynamic routing in Next.js is a feature that allows you to create pages whose paths are determined by dynamic data—such as blog post slugs, user IDs, or product codes—rather than static filenames. In both the legacy pages directory and the modern App Router (Next.js 13+), this is achieved by creating files or folders that use square bracket syntax to indicate dynamic segments (e.g., [id], [slug])
      
      Implemented dynamic routing in Blogs
      */
      }
      <h1>Tech company</h1>
      <p>
        <Link href="/blogs">Blogs </Link>{" "}
      </p>
      <p>
        <Link href="/about">About </Link>{" "}
      </p>
      <p>
        <Link href="/services">Services</Link>
        {/* Note: In react we use 'to' with Link component to do the routing but in NextJs we use 'href'*/}
      </p>
      <p>
        <Link href="/file">File </Link>{" "}
      </p>
    </div>
  );
}
