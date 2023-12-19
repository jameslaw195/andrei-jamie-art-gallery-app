import { HeartIcon } from "@/Assets/ButtonIcon";

export default function FavouriteButton({
  slug,
  isFavourite,
  onToggleFavourite,
}) {
  // console.log("isfavourite", isFavourite);

  return (
    <button
      className="favourite-button"
      onClick={() => onToggleFavourite(slug)}
    >
      <HeartIcon fill={isFavourite ? "#FF0000" : "#000000"} />
    </button>
  );
}
