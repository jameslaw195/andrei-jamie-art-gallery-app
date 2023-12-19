import Image from "next/image";
import React from "react";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import Link from "next/link";

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
      <Link href={`/art-pieces/${slug}`} key={slug}>
        <Image src={image} alt={` ${name}`} width={243} height={192} />
      </Link>

      {/* <h1> Name: {name} </h1> */}

      <FavouriteButton
        isFavourite={isFavourite}
        onToggleFavourite={onToggleFavourite}
        slug={slug}
      />
      <p>{`${name} by ${artist}`}</p>
    </>
  );
}
