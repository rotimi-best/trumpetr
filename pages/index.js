import Fetch from "isomorphic-unfetch";
import React, { useEffect, } from "react";
import Layout from "../components/Layout";
import Welcome from "../components/Welcome";
import Posts from "../components/Posts";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Home = props => {
  const { posts } = props;
  let user = null;

  useEffect(() => {
    user = localStorage.getItem("user") === "undefined" ? null : JSON.parse(localStorage.getItem("user"));
    console.log("user 1", user)
  }, []);

  console.log("user", user);
  console.log("posts", posts);

  if (!user) {
    return <Welcome />
  }

  return <Posts posts={posts} />;
};

Home.getInitialProps = async function () {
  console.log('url', process.env.API_URL)
  const res = await fetch(`http://localhost:9000/posts`);
  const data = await res.json();

  return {
    posts: data.posts,
  };
};

export default Home;
