import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({
  onToggleFavourite,
  artPiece,
  pieces,
  artPiecesInfo,
}) {
  // console.log(isFavourite);

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
          isFavourite={artPiecesInfo.find(
            (piece) => piece.slug === artPiece.slug
          )}
        />
      ))}
    </div>
  );
}
