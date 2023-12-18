import Image from "next/image";
import React from "react";

export default function ArtPiecePreview({ image, name, artist }) {
  return (
    <>
      <Image src={image} alt={`${name}`} />
      <h1> {name} </h1>
      <p> {artist} </p>
    </>
  );
}
