import Image from "next/image";
import React from "react";

export default function ArtPiecePreview({ image, name, artist }) {
  return (
    <>
      <Image src={image} alt={` ${name}`} width={243} height={192} />

      {/* <h1> Name: {name} </h1> */}
      <p>{`${name} by ${artist}`}</p>
    </>
  );
}
