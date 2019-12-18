import React, { useState } from "react";
import Layout from "../components/Layout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [fullname, setFullname] = useState("");
  const [nickname, setNickname] = useState("");

  const handleChange = key => e => {
    switch (key) {
      case "fullname":
        setFullname(e.target.value);
        break;
      case "nickname":
        setNickname(e.target.value);
        break;
      default:
        console.log("nothing to do");
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Layout>
      <div className="Login">
        <h1>Let's get started</h1>
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
            <Form.Text className="text-muted">
              Everyone will see this name
            </Form.Text>
          </Form.Group>

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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <style jsx>{`
        .Login {
          margin-top: 3rem;
          height: 80vh;
        }
      `}</style>
    </Layout>
  );
};

export default Login;
