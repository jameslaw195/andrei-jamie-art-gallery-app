import ArtPieceDetails from "./art-pieces/[slug]";
import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage({ onToggleFavourite, artPiece }) {
  const randomIndex = Math.floor(Math.random() * artPiece.length);

  const randomPiece = artPiece[randomIndex];

  return (
    <>
      <h1> Lawrence and Leahu Galleries </h1>
      <Spotlight
        onToggleFavourite={onToggleFavourite}
        randomPiece={randomPiece}
      />
    </>
  );
}
