import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <div style={{ height: "100vh"}} className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" />
    </div>
  )
}
