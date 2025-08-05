import Views from "@/components/Views";
import Likes from "@/components/Likes";
import Comments from "@/components/Comments";
import Link from "next/link";
import { Suspense } from "react";

const Blogs = () => {
  console.log("Blogs Page");
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link active">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Welcome to Our Blog</h1>
        <ol className="blog-links">
          <li>
            <Link href="/blogs/1">Blog 1</Link>
          </li>
          <li>
            <Link href="/blogs/2">Blog 2</Link>
          </li>
          <li>
            <Link href="/blogs/3">Blog 3</Link>
          </li>
        </ol>
        <div className="blog-links">
          <br />
          <Suspense fallback={<div>Loading Views...</div>}  >
            <Views />
          </Suspense>
          <Suspense fallback={<div>Loading Likes...</div>}>
            <Likes />
          </Suspense>
          <Suspense fallback={<div>Loading Comments...</div>}>
            <Comments />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Blogs;
