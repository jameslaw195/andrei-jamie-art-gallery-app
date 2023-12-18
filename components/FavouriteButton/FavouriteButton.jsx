import { HeartIcon } from "@/Assets/ButtonIcon";

export default function favouriteButton({
  slug,
  isFavourite,
  onToggleFavourite,
}) {
  return (
    <button onClick={() => onToggleFavourite(slug)}>
      <HeartIcon fill={isFavourite ? "red" : "black"} />
    </button>
  );
}
