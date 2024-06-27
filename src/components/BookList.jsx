import { Component } from "react";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SingleBookTwo from "./SingleBookTwo";

class BookList extends Component {
  render() {
    return (
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Cerca
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        {this.props.bksGen.map((book) => (
          <SingleBook
            key={book.asin}
            bTitle={book.title}
            bGenre={book.category}
            bCover={book.img}
          />
        ))}
      </>
    );
  }
}

export default BookList;
