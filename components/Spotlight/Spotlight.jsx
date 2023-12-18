import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function Spotlight({ randomPiece, onToggleFavourite }) {
  return (
    <>
      <ArtPiecePreview
        image={randomPiece.imageSource}
        name={randomPiece.name}
        artist={randomPiece.artist}
        isFavourite={randomPiece.isFavourite}
        onToggleFavourite={onToggleFavourite}
        slug={randomPiece.slug}
      />
    </>
  );
}
