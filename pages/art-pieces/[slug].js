import { useRouter } from "next/router";

export default function ArtPieceDetails({ artPiece }) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = artPiece.find((piece) => piece.slug === slug);

  return (
    <>
      <ArtPieceDetails
      // name={piece.name}
      // image={piece.imageSource}
      // genre={piece.genre}
      // artist={piece.artist}
      // year={piece.year}
      />
    </>
  );
}
