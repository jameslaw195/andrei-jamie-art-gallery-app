import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ artPiece }) {
  console.log("this is art piece", artPiece);
  return (
    <>
      {artPiece.map((artPiece) => (
        <ArtPiecePreview
          key={artPiece.id}
          // image={artPiece.imageSource}
          name={artPiece.name}
          artist={artPiece.artist}
        />
      ))}
    </>
  );
}
