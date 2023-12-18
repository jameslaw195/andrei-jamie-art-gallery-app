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
    <>
      {artPiece.map((artPiece) => (
        <Link href={`/art-pieces/${artPiece.slug}`} key={artPiece.slug}>
          <ArtPiecePreview
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
        </Link>
      ))}
    </>
  );
}
