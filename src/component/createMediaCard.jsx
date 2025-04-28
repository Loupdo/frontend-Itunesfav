import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { useApp } from "../context/context";

export default function CreateMediaCard({ item }) {
  const { favorites, setFavorites } = useApp();

  // Shortens text if it exceeds max length
  const shortenText = (text, maxLength) => {
    if (!text) {
      return "";
    } else {
      return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    }
  };

  //function to check if one item is already in favorites
  const isFavorite = favorites.some((fav) =>
    // songs use trackID other media
    fav.trackId
      ? fav.trackId === item.trackId
      : fav.collectionId === item.collectionId
  );

  //function to add/remove from favorites
  const handleFavoriteClick = () => {
    if (isFavorite) {
      setFavorites(
        favorites.filter((fav) =>
          fav.trackId
            ? fav.trackId !== item.trackId
            : fav.collectionId !== item.collectionId
        )
      );
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <>
      <Card
        className="justify-content-left align-items-center card mx-3"
        bg="dark"
        text="white"
        border="info"
      >
        <Card.Header className="header">
          Type: {item.kind ? item.kind : item.wrapperType}
        </Card.Header>
        <Card.Img src={item.artworkUrl100} className="artwork" />
        <Card.Title>
          {item.trackName
            ? shortenText(item.trackName, 30)
            : shortenText(item.collectionName, 30)}
        </Card.Title>
        <Card.Subtitle className="my-3">
          Artist : {item.artistName}
        </Card.Subtitle>
        <Card.Body>
          {
            //handle if item.collection is empty
            item.collectionName ? (
              <>
                Album: {shortenText(item.collectionName, 30)}
                <br />
              </>
            ) : (
              <></>
            )
          }
          Year: <em>{item.releaseYear}</em>
        </Card.Body>
        {/*Toggles between Add/Remove and change styles*/}
        <Button
          className={`my-3 ${
            isFavorite ? "removeFav-button" : "addToFav-button"
          }`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? "Remove from favorite" : "Add to favorite"}
        </Button>
      </Card>
    </>
  );
}
