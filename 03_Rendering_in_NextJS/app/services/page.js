import { cookies } from "next/headers";
import Link from "next/link";

// export const dynamic = "force-dynamic";
// Here we are making a static page dynamic

// export const dynamic = "force-static";
// This will force the page to be static.

// export const dynamic = "auto";
// This will make the page dynamic based on the functions used  if the functions used are cookies(), header() then it will make the component dynamic else it will make the component static.

// export const dynamic = "error";
// This setting will force the build to fail if Next.js detects that the page should be dynamic but you're trying to make it static, or vice versa. It's used for debugging and ensuring you're explicitly choosing the rendering strategy.


const Services = async () => {
  // const value = await searchParams;
  // console.log(value);

  // This is the second method of making a static page dynamic by using searchParams. To see other methods see the NextJS documentation.

  // const cookieStore = await cookies();
  // console.log(cookieStore);

  //This is the thired method of making a static component dynamic by using cookies.

  console.log("Running Services Page");
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
            <Link href="/services" className="nav-link active">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Our Services</h1>
        <ul className="services-list">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Consulting Services</li>
          <li>Digital Marketing</li>
        </ul>
      </div>
    </>
  );
};

export default Services;
