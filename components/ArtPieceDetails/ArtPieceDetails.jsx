import Image from "next/image";

export default function ArtPieceDetails({
  slug,
  // image,
  name,
  artist,
  year,
  genre,
}) {
  return (
    <>
      <p> {slug} </p>
      {/* <Image src={image} alt={`${name}`} /> */}
      <h1> {name} </h1>
      <p> {artist} </p>
      <p> {year} </p>
      <p> {genre} </p>
    </>
  );
}