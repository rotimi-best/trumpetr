import React, { useState } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { login } from "../actions/user";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = key => e => {
    const val = e.target.value;

    switch (key) {
      case "nickname":
        if (/\s/.test(val)) {
          return;
        }
        setNickname(val);
        break;
      case "password":
        setPassword(val);
        break;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    const { success, message } = await login({
      nickname,
      password
    });

    console.log(message, success)

    if (success) {
      Router.push("/");
      setValidated(true);
    } else {
      setValidated(false);
      setNicknameError(message);

      setTimeout(() => setNicknameError(""), 2000);
    }
  };

  return (
    <Layout>
      <div className="Login">
        <h1>Welcome back</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="nickname">
            <Form.Label>Nickname</Form.Label>
            <Form.Control
              type="text"
              placeholder="davidoyedepo"
              value={nickname}
              onChange={handleChange("nickname")}
              isInvalid={nicknameError.length ? true : false}
              required
            />
            <Form.Text className="text-muted">
              This nickname is unique to you
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              {nicknameError}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handleChange("password")}
              required
            />
          </Form.Group>
          <Button variant="outline-dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <style jsx>{`
        .Login {
          margin: 3rem 0;
          min-height: 80vh;
          border: 2px solid #007bff;
          box-shadow: 10px 14px 0px 0px rgb(116, 124, 165);
          padding: 10px;
        }
      `}</style>
    </Layout>
  );
};

export default Login;
