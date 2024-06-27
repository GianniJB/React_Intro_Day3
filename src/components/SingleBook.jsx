import { CardText, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const SingleBook = (props) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.bCover} />
        <Card.Body>
          <Card.Title>{props.bTitle}</Card.Title>
          <CardText>{props.bGenre}</CardText>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
