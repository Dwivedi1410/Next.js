import Link from "next/link";

export default function Services() {
  return (
    <div>
      <h1>Services</h1>
      {/* Here we are doing nested routing inside services */}
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
