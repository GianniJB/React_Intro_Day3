import { Component } from "react";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";
import { InputGroup } from "react-bootstrap";

class BookList extends Component {
  render() {
    return this.props.bksGen.map((book) => (
      <SingleBook key={book.asin} bTitle={book.title} bCover={book.img} />
    ));
  }
}

export default BookList;
