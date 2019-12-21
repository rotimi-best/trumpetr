import React, { useContext } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Welcome from "../components/Welcome";
import Posts from "../components/Posts";
import AppContext from "../context/Context";

import CONFIG from "../helpers/config";

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
  const res = await fetch(`${CONFIG.API_URL}/posts`);
  const data = await res.json();

  return { posts: data.posts };
};

export default Home;
