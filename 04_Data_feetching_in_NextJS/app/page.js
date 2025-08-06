import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our website!</p>
      <Link href="/posts">Posts</Link>
    </div>
  );
};

export default Home;
