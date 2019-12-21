import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

const NewPost = ({ openModal, toggleModal, handleSave }) => {
  const [read, setRead] = useState("");
  const [lesson, setLesson] = useState("");
  const submitDisabled = read.length && lesson.length ? false : true;

  const handleChange = e => {
    switch(e.target.name) {
      case "lesson":
        setLesson(e.target.value);
        break;
      case "read":
        setRead(e.target.value);
        break;
    }
  }

  const resetAndSubmit = () => {
    handleSave({ read, lesson })
    setLesson("")
    setRead("")
  }

  return (
    <>
      <Modal show={openModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>What did you learn?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              name="read"
              placeholder="What bible verse did you read today?"
              aria-label="What bible verse did you read today?"
              aria-describedby="bible-verse"
              value={read}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <FormControl
              name="lesson"
              as="textarea"
              aria-describedby="lesson"
              aria-label="What did you learn from it?"
              placeholder="What did you learn from it?"
              value={lesson}
              onChange={handleChange}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button
            disabled={submitDisabled}
            variant="outline-primary"
            onClick={resetAndSubmit}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <style jsx>{`
      `}</style>
    </>
  )
};

export default NewPost;
