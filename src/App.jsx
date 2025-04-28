// Import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Import components and assets
import SearchBar from "./component/searchBar";
import CreateMediaCard from "./component/createMediaCard";
import iTunesLogo from "/ITunes_logo.svg";
// Import Bootstrap components
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// Import global state from context
import { useApp } from "./context/context";

function App() {
  const { dataSearch, setDataSearch, favorites } = useApp();
  return (
    <Container fluid className="bg-dark d-block">
      {/* Button to display favorite items */}
      <Button
        className="button-fav"
        onClick={() => {
          console.log(favorites);
          setDataSearch(favorites);
        }}
      >
        Show my favorite
      </Button>

      {/* Header Section */}
      <Row className="justify-content-center align-items-center">
        <img src={iTunesLogo} className="logo" alt="iTunes logo" />
        <h2>iTunes FAV</h2>
      </Row>

      {/* Search Bar Section */}
      <Row className="justify-content-center">
        <SearchBar />
      </Row>

      {/* Display search results or favorites */}
      <Row className="justify-content-center">
        {dataSearch.map((item, index) => {
          return <CreateMediaCard item={item} key={index} />;
        })}
      </Row>
    </Container>
  );
}

export default App;
