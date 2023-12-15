import ArtPieceDetails from "./art-pieces/[slug]";
import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage({ artPiece }) {
  const randomIndex = Math.floor(Math.random() * artPiece.length);

  const randomPiece = artPiece[randomIndex];

  return (
    <>
      <h1> I am in in index.js in pages root </h1>
      <Spotlight randomPiece={randomPiece} />
      <ArtPieceDetails />
    </>
  );
}
