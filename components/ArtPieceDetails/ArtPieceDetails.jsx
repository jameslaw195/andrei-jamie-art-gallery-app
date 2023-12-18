import Image from "next/image";

export default function ArtPieceDetails({
  slug,
  image,
  name,
  artist,
  year,
  genre,
}) {
  return (
    <>
      <p> {slug} </p>
      <Image src={image} alt={` ${name}`} width={243} height={192} />
      <h1> {name} </h1>
      <p> {artist} </p>
      <p> {year} </p>
      <p> {genre} </p>
    </>
  );
}
