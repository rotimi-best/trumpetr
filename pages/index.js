import React, { useContext } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Welcome from "../components/Welcome";
import Posts from "../components/Posts";
import AppContext from "../context/Context";

const RightComponent = ({ posts }) => {
  const { user, loading } = useContext(AppContext)

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Welcome />
  }

  return <Posts user={user} posts={posts} />;
}

const Home = props => (
    <Layout>
      <RightComponent {...props} />
    </Layout>
)

Home.getInitialProps = async function() {
  const res = await fetch(`http://localhost:9000/posts`);
  const data = await res.json();

  const posts = data.posts.length
    ? data.posts
    : [
      {
        fullname: "Best ibitoye",
        nickname: "best",
        read: "1 Corin 2: 2",
        lessons: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        fullname: "Bill Gates",
        nickname: "bill",
        read: "James",
        lessons: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        fullname: "Bill Gates",
        nickname: "bill",
        read: "James",
        lessons: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        fullname: "Bill Gates",
        nickname: "bill",
        read: "James",
        lessons: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        fullname: "Bill Gates",
        nickname: "bill",
        read: "James",
        lessons: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        fullname: "Bill Gates",
        nickname: "bill",
        read: "James",
        lessons: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
    ];
  return { posts };
};

export default Home;
