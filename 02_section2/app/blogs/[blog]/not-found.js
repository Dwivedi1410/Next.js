'use client';

import Link from "next/link";
import {useParams} from "next/navigation";

export default function NotFound() {
    // Note: On a not found page, the params object is not available by default.
    // This means we cannot directly access the blog name or ID from the URL using server-side code.
    // To get the blog name or ID that the user entered in the URL, we use the useParams hook,
    // which is only available in 'use client' components.
    const {blog} = useParams();
    console.log(blog);

    return(
        <div>
            <h1>Blog of this ID '{blog}'does not exist.</h1>
            <Link href="/blogs">Go to Blogs</Link>
        </div>
    )
    
}


// Note: We can define a separate not found component inside the [blog] folder because it is a dynamic route. 
// In Next.js, only folders with dynamic routes (like [blog]) can have their own not found page in addition to the root not-found.js.
// For static folders, you cannot add another not found component.