import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function Spotlight({ randomPiece }) {
  return (
    <>
      <ArtPiecePreview
        image={randomPiece.imageSource}
        name={randomPiece.name}
        artist={randomPiece.artist}
      />
    </>
  );
}
