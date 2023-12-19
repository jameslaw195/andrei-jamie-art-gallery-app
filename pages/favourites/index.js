import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function FavouritesPage({
  artPiece,
  onToggleFavourite,
  artPiecesInfo,
}) {
  console.log("i am art piece info", artPiecesInfo);

  let filteredArray = artPiece.filter((piece) => {
    return artPiecesInfo.find(
      (artPiece) =>
        artPiece.slug === piece.slug && artPiece.isFavourite === true
    );
  });

  console.log("FILTERED ARRAY", filteredArray);

  return (
    <>
      <h1> Favourites </h1>
      <ArtPieces
        artPiece={filteredArray}
        onToggleFavourite={onToggleFavourite}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
