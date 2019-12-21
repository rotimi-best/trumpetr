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

          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#007bff" />
          <link rel="apple-touch-icon" href="/static/icon-512x512.png" />
          <meta name="apple-mobile-web-app-title" content="Trumptr" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
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
            min-height: 98.3vh;
          }
        `}
        </style>
      </div>
    )
  }
};

export default Layout;
