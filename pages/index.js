import Layout from "../components/Layout";
import Welcome from "../components/Welcome";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Home = props => {
  const { auth } = props;

  if (!auth) {
    console.log("user is not authenticated");
  } else {
    console.log("user is authenticated");
  }

  return (
    <Layout>
      <div className="Home">Hey there</div>

      <style jsx>{``}</style>
    </Layout>
  );
};

Home.getInitialProps = async function() {
  const user = localStorage.getItem("user");
  if (!user) {
    return {
      auth: false
    };
  }

  // const res = await fetch(`${process.env.API_URL}/posts`);
  // const data = await res.json();

  return {
    auth: true
    // posts: data.posts,
    // user: JSON.parse(user)
  };
};

export default Home;
