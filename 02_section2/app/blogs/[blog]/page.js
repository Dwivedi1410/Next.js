export default async function Blogs({params}) {
    const blogName = await params;
    //It receives an object with a params property — typical of dynamic route pages in Next.js App Router (e.g., /blogs/[blog]).

    console.log(blogName.blog)
    // For example, if the URL was /blogs/javascript, blogName.blog would be "javascript"
    return(
        <div>
            <h1>{blogName.blog}</h1>
        </div>
    )
}