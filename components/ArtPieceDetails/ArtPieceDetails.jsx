import Image from "next/image";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import { uid } from "uid";
import { useImmerLocalStorageState } from "@/pages/lib/hook/useImmerLocalStorageState";

export default function ArtPieceDetails({
  slug,
  image,
  name,
  artist,
  year,
  genre,
  onToggleFavourite,
  isFavourite,
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

    setComments([{ id: uid(), time, date, ...newComment }, ...comments]);
  }
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
      <Comments comments={comments} />
      <CommentForm onAddComment={handleAddComment} />
    </>
  );
}
