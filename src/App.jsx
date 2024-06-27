import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Container, Row } from "react-bootstrap";
import SingleBookTwo from "./components/SingleBookTwo";
import fantasyB from "./data/fantasy.json";
import historyB from "./data/history.json";
import horrorB from "./data/horror.json";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Container>
        <Welcome />
        <Row xs={1} sm={2} md={3} lg={4}>
          <BookList bksGen={horrorB} />
          {/* <BookList bksGen={fantasyB} />
          <BookList bksGen={historyB} /> */}
        </Row>
        {/* <AllTheBooks /> */}
        <MyFooter />
      </Container>
    </div>
  );
}

export default App;
