import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({
  onToggleFavourite,
  artPiece,
  pieces,
  artPiecesInfo,
}) {
  return (
    <div className="art-pieces-container">
      {artPiece.map((artPiece) => (
        <ArtPiecePreview
          key={artPiece.slug}
          image={artPiece.imageSource}
          name={artPiece.name}
          artist={artPiece.artist}
          slug={artPiece.slug}
          onToggleFavourite={onToggleFavourite}
          // isFavorite={
          //   pieces.find((artPiece1) => artPiece1.slug === artPiece.slug)
          //     ?.isFavorite
          // }
        />
      ))}
    </div>
  );
}
