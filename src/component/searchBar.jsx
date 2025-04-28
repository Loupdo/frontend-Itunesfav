import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from "axios";
import { useApp } from "../context/context";

export default function SearchBar() {
  const [dropdownName, setdropdownName] = useState("All media");
  const [input, setInput] = useState("");
  const { setDataSearch, token } = useApp();
  const API_BASE_URL = import.meta.env.PROD
    ? "https://backend-itunesfav.onrender.com"
    : "/api";

  // Fetches data from the API based on the search parameters.
  const fetchData = async (obj) => {
    try {
      // GET API search results with authorization (searchRoute)
      const response = await axios.get(`${API_BASE_URL}/search`, {
        params: obj,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDataSearch(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handles the search input, formats it, and triggers the API call function
  const handleSearch = () => {
    const formattedInput = input.replace(" ", "+");
    const formattedMedia = dropdownName.toLowerCase();

    let searchObj = {
      search: formattedInput,
      media: formattedMedia,
    };
    if (dropdownName === "Music") {
      searchObj = { search: input, media: "song" };
    }
    if (dropdownName === "TV show") {
      searchObj = { search: input, media: "tvSeason" };
    }
    if (dropdownName === "E-book") {
      searchObj = { search: input, media: "ebook" };
    }
    fetchData(searchObj);
  };

  return (
    <InputGroup className="w-100 mb-3" style={{ maxWidth: "900px" }}>
      {/* Search Input Field */}
      <Form.Control
        placeholder={`Search in ${dropdownName}`}
        aria-label="Search"
        aria-describedby="basic-addon1"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* Media Type Dropdown */}
      <Dropdown as={ButtonGroup}>
        <InputGroup.Text className="custom-input-text">
          {dropdownName}
        </InputGroup.Text>
        <Dropdown.Toggle
          split
          variant="outline-info"
          id="dropdown-split-basic"
        />
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              setdropdownName("All media");
            }}
          >
            All media
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setdropdownName("E-book");
            }}
          >
            E-book
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setdropdownName("Movie");
            }}
          >
            Movie
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setdropdownName("Music");
            }}
          >
            Music
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setdropdownName("Podcast");
            }}
          >
            Podcast
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setdropdownName("TV show");
            }}
          >
            TV show
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* Search Button */}
      <Button variant="info" onClick={() => handleSearch()}>
        Search
      </Button>
    </InputGroup>
  );
}
