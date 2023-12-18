import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ artPiece }) {
  return (
    <>
      {artPiece.map((artPiece) => {
        <ArtPiecePreview
          // image={artPiece.imageSource}
          name={artPiece.name}
          artist={artPiece.artist}
        />;
      })}
    </>
  );
}
