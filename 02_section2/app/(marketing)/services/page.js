import Link from "next/link";

export default function Services() {
  return (
    <div>
      <h1>Services</h1>
      <p>
        <Link href="/services/web-dev">Web Development</Link>
      </p>
      <p>
        <Link href="/services/app-dev">App Development</Link>
      </p>
      <p>
        <Link href="/">Home</Link>
      </p>
      
    </div>
  );
}



// Route Grouping is created to group related routes together, also to organize the routes in a better way.
// For this purpose we make a folder by this syntax: (application), (marketing).