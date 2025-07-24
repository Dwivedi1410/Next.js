import Link from "next/link";

export default function Blogs() {
    return(
        <>
            <h1>All Blogs</h1>
            <p>
                <Link href="/blogs/blog1">Blog1</Link>
            </p>
            <p>
                <Link href="/blogs/blog2">Blog2</Link>
            </p>
            <p>
                <Link href="/blogs/blog3">Blog3</Link>
            </p>
        </>
    )
}