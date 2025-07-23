"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Tech company</h1>
      <p>
        <Link href="/about">About </Link>{" "}
      </p>
      <p>
        <Link href="/services">Services</Link>
        {/* Note: In react we use 'to' with Link component to do the routing but in NextJs we use 'href'*/}
      </p>
    </div>
  );
}
