import Link from "next/link";

export async function generateMetadata({params}) {
    const blogName = await params;
    return {
        title: blogName.blog,
    }
}
// You can use generateMetadata function to fetch metadata that depends on data. For example, to fetch the title and description for a specific blog post:

export default async function Blog({params}) {
    const blogName = await params;
    //It receives an object with a params property — typical of dynamic route pages in Next.js App Router (e.g., /blogs/[blog]).

    // console.log(blogName.blog)
    // For example, if the URL was /blogs/javascript, blogName.blog would be "javascript"
    return(
        <div>
            <h1>{blogName.blog}</h1>
            <Link href={`/blogs/${blogName.blog}/comments`}>See comments</Link>
        </div>
    )
}