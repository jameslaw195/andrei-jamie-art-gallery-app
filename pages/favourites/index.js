import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function FavouritesPage({
  artPiece,
  onToggleFavourite,
  artPiecesInfo,
}) {
  console.log("i am in favourites page", artPiecesInfo);

  let filteredArray = artPiecesInfo.filter(
    (piece) => piece.isFavourite === true
  );

  console.log("FILTERED ARRAY", filteredArray);

  //   let filteredPieces = artPiece
  //     .map((piece) => {
  //       return (
  //         <div key={piece.index}>
  //           <p>{piece.name}</p>{" "}
  //         </div>
  //       );
  //     })
  //     .filter((piece) => piece.isFavourite === true);

  return (
    <ArtPieces
      artPiece={artPiece}
      onToggleFavourite={onToggleFavourite}
      artPiecesInfo={artPiecesInfo}
      //   filteredPieces={filteredPieces}
    />
  );
}
