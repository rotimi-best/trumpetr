import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>Trumptr</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Navbar />
    <Container>{props.children}</Container>
  </div>
);

export default Layout;
