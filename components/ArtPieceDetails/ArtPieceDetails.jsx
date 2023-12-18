import Image from "next/image";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

export default function ArtPieceDetails({
  slug,
  image,
  name,
  artist,
  year,
  genre,
  onToggleFavourite,
  isFavourite,
  artPiecesInfo,
}) {
  return (
    <>
      <p> {slug} </p>
      <Image src={image} alt={` ${name}`} width={243} height={192} />
      <h1> {name} </h1>
      <p> {artist} </p>
      <p> {year} </p>
      <p> {genre} </p>
      <FavouriteButton
        onToggleFavourite={onToggleFavourite}
        isFavourite={isFavourite}
        slug={slug}
      />
    </>
  );
}
