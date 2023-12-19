import Image from "next/image";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import { uid } from "uid";
import { useImmerLocalStorageState } from "@/pages/lib/hook/useImmerLocalStorageState";
import Colors from "../Colors/Colors";

export default function ArtPieceDetails({
  slug,
  image,
  name,
  artist,
  year,
  genre,
  onToggleFavourite,
  isFavourite,
  colors,
}) {
  const [comments, setComments] = useImmerLocalStorageState("comment", {
    defaultValue: [],
  });

  function handleAddComment(newComment) {
    const date = new Date().toLocaleDateString("en-gb", {
      dateStyle: "medium",
    });
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setComments([{ id: uid(), slug, time, date, ...newComment }, ...comments]);
  }

  console.log("fav button", FavouriteButton);

  return (
    <>
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
      <Colors colors={colors} />
      <CommentForm onAddComment={handleAddComment} />
      <Comments comments={comments} slug={slug} />
    </>
  );
}
