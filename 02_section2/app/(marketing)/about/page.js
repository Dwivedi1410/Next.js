import Link from "next/link";

export const metadata = {
    title: "About",
}

export default function About() {
    return(
        <div>
            <h1>About</h1>
            <Link href="/">Home</Link>
             {/* Note: In react we use 'to' with Link component to do the routing but in NextJs we use 'href'*/}
        </div>
    )
} 


// Route Grouping is created to group related routes together, also to organize the routes in a better way.
// For this purpose we make a folder by this syntax: (application), (marketing).