import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Row } from "react-bootstrap";
import SingleBook from "./components/SingleBook";
import fantasyB from "./data/fantasy.json";
import historyB from "./data/history.json";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="container">
        <Welcome />
        <Row xs={1} sm={2} md={3} lg={4}>
          <BookList bksGen={fantasyB} />
          <BookList bksGen={historyB} />
        </Row>
        {/* <SingleBook bTitle={fantasyB[0].title} bCover={fantasyB[0].img} /> */}
        {/* <AllTheBooks /> */}
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
