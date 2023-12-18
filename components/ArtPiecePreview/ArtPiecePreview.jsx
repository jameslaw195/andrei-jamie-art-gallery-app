import Image from "next/image";
import React from "react";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

export default function ArtPiecePreview({
  image,
  name,
  artist,
  isFavourite,
  onToggleFavourite,
  slug,
}) {
  return (
    <>
      <Image src={image} alt={` ${name}`} width={243} height={192} />

      {/* <h1> Name: {name} </h1> */}
      <p>{`${name} by ${artist}`}</p>
      <FavouriteButton
        isFavourite={isFavourite}
        onToggleFavourite={onToggleFavourite}
        slug={slug}
      />
    </>
  );
}
