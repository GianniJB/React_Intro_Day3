import { Component } from "react";
import { CardText, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class SingleBookTwo extends Component {
  render() {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.bCover} />
          <Card.Body>
            <Card.Title>{this.props.bTitle}</Card.Title>
            <CardText>{this.props.bGenre}</CardText>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBookTwo;
