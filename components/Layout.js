import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Head from "next/head";
import Navbar from "./Navbar";
import { AppProvider } from "../context/Context";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      loading: true
    }
  }

  componentDidMount() {
    this.setState({
      user: localStorage.getItem("user") === "undefined" ? null : JSON.parse(localStorage.getItem("user")),
      loading: false,
    })
  }

  logout = () => {
    localStorage.removeItem("user")
    this.setState({
      user: null
    })
  }

  render() {
    const { user, loading } = this.state;

    return (
      <div className="root">
        <Head>
          <title>Trumptr</title>
          <link href="https://fonts.googleapis.com/css?family=Karla&display=swap" rel="stylesheet" />
        </Head>
        <Navbar user={user} logout={this.logout} />
        <AppProvider value={{
          user,
          loading
        }}>
          <Container>{this.props.children}</Container>
        </AppProvider>

        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: 'Karla', sans-serif;
            border: 8px solid #007bff;
            height: 100%;
          }
          .root {
            min-height: 100vh;
          }
        `}
        </style>
      </div>
    )
  }
};

export default Layout;
