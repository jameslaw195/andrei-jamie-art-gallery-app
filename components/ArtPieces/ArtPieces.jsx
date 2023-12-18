import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({ onToggleFavourite, artPiece }) {
  return (
    <>
      {artPiece.map((artPiece) => (
        <Link href={`/art-pieces/${artPiece.slug}`} key={artPiece.slug}>
          <ArtPiecePreview
            image={artPiece.imageSource}
            name={artPiece.name}
            artist={artPiece.artist}
            slug={artPiece.slug}
            onToggleFavourite={onToggleFavourite}
          />
        </Link>
      ))}
    </>
  );
}
