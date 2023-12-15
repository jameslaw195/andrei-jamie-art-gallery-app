import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <Image src={image} alt={`${title}`} />
      <h1> {title} </h1>
      <p> {artist} </p>
      <p> {year} </p>
      <p> {genre} </p>
    </>
  );
}
