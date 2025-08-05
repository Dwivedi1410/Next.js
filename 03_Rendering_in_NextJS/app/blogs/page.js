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
         <Likes />
         <Comments />
         <Views />
        </div>
      </div>
    </>
  );
};

export default Blogs;


//Notes about client component
// If parent component is set to be client compoent then all of it's child components will be set to be client components.So if we make this page clinet component then all the component Like , Views and Comments will become a clinet component. and their code will be sent to the client side.

// If you mark any component client component then it's code will be sent to the client side.(browserside)

// Hence only make those components client component that are neccecary.


// By default each component in the NextJS is a server component.
