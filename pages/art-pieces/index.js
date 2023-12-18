import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function artPiecesPage({ artPiece }) {
  return (
    <>
      <h1> Here I should show all my art piece details</h1>
      <ArtPieces artPiece={artPiece} />
    </>
  );
}
