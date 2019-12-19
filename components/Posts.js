import React, { useEffect } from "react";
import Layout from "./Layout";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Posts = ({ posts }) => {
  console.log("posts", posts)

  return (
    <Layout>
      <div className="Posts">
        List of posts
      </div>

      <style jsx>{`
      `}</style>
    </Layout>
  )
};

export default Posts;
