import Link from "next/link"

export default async function Comments({params}) {
    console.log(await params);
    const blogName = await params;
    return(
        <div>
            <h1>This is comment section</h1>
            <p>
                <Link href={`/blogs/${blogName.blog}/comments/comment1`}>comment 1</Link>
            </p>
        </div>
    )
}