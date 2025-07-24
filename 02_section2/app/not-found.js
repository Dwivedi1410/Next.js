import Link from "next/link";

export default function NotFound() {
    return(
        <div>
            <h1>Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link href="/">Go to Home</Link>
        </div>
    )
}

// This is a custom 404 page that will be shown when a user tries to access a page that does not exist.
