import Layout from "./Layout";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Link from "next/link";

const NewPost = (props) => {
  const { openModal, handleClose, handleSave } = props;

  return (
    <Layout>
      <Modal show={openModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share what you learnt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Bible verse</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>You learnt?</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="What did you learn?" />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <style jsx>{`
      `}</style>
    </Layout>
  )
};

export default NewPost;
