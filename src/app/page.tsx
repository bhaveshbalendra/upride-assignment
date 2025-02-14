import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <h1>Home Page</h1>
      <button className="bg-blue-500 rounded-md p-2 ml-3">
        <Link href="/about-us">Click to About Us</Link>
      </button>
    </div>
  );
};

export default Home;
