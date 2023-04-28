import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from "../QZone/QZone";

export default function RightNav() {
  return (
    <div>
      <div>
        <Button className="my-1" variant="primary">
          <FaFacebook /> Login with Google
        </Button>
        <Button className="my-1" variant="secondary">
          <FaGithub /> Login with Github
        </Button>
      </div>
      <div>
        <h2 className="mt-4">Find US On</h2>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> FaceBook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
    </div>
  );
}
