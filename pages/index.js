import Spotlight from "./components/Spotlight/Spotlight";

export default function SpotlightPage({ artPiece }) {
  const randomIndex = Math.floor(Math.random() * artPiece.length);

  const randomPiece = artPiece[randomIndex];

  return <Spotlight randomPiece={randomPiece} />;
}
