import React, { useState } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { register } from "../actions/user";

const Register = () => {
  const [validated, setValidated] = useState(false);
  const [fullname, setFullname] = useState("");
  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = key => e => {
    const val = e.target.value;

    switch (key) {
      case "fullname":
        setFullname(val);
        break;
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

    const { success, message, user } = await register({
      fullname,
      nickname,
      password
    });
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
      <div className="Register">
        <h1>Let's create your account</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="fullname">
            <Form.Label>Fullname</Form.Label>
            <Form.Control
              type="text"
              placeholder="David Oyedepo"
              value={fullname}
              onChange={handleChange("fullname")}
              required
            />
            <Form.Control.Feedback className="text-muted">
              This Fullname is required
            </Form.Control.Feedback>
          </Form.Group>

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
              This nickname is unique to you, also avoid spaces
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
        .Register {
          margin-top: 3rem;
          height: 80vh;
          border: 2px solid #007bff;
          box-shadow: 10px 14px 0px 0px rgb(116, 124, 165);
          padding: 15px;
        }
      `}</style>
    </Layout>
  );
};

export default Register;
