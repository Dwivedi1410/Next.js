import Link from "next/link";

export const metadata = {
    title: "Blogs",
}

export default function Blogs() {
    return(
        <>
            <h1>All Blogs</h1>
            <p>
                <Link href="/blogs/1">Blog1</Link>
            </p>
            <p>
                <Link href="/blogs/2">Blog2</Link>
            </p>
            <p>
                <Link href="/blogs/3">Blog3</Link>
            </p>
        </>
    )
}



// Route Grouping is created to group related routes together, also to organize the routes in a better way.
// For this purpose we make a folder by this syntax: (application), (marketing).
