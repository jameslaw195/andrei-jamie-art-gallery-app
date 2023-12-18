import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

export default function Spotlight({ randomPiece, onToggleFavourite }) {
  console.log("this is ontogglefavourite", onToggleFavourite);
  console.log("slug", randomPiece.slug);
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
