import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function artPiecesPage({ onToggleFavourite, artPiece }) {
  return (
    <>
      <h1> Gallery </h1>
      <ArtPieces artPiece={artPiece} onToggleFavourite={onToggleFavourite} />
    </>
  );
}
