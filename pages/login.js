import React, { useState } from "react";
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
    switch (key) {
      case "nickname":
        setNickname(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        console.log("nothing to do");
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    const res = await login({
      nickname,
      password
    });

    console.log(res);

    setValidated(true);
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
              required
            />
            <Form.Text className="text-muted">
              This nickname is unique to you, also avoid spaces
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Your nickname is required and must be unique
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
          margin-top: 3rem;
          height: 80vh;
          border: 2px solid #6f42c1;
          box-shadow: 10px 14px 0px 0px rgba(110, 66, 193, 1);
          padding: 10px;
        }
      `}</style>
    </Layout>
  );
};

export default Login;
