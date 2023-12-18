import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ArtPieceDetailsPage({
  artPiece,
  artPiecesInfo,
  onToggleFavourite,
}) {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    artPiece.find((piece) => piece.slug === slug);
  }, [artPiece, slug]);

  if (!artPiece) {
    return null;
  }

  return (
    <>
      <h1>Hi art piece details</h1>
      <ArtPieceDetails
        name={artPiece.name}
        image={artPiece.imageSource}
        genre={artPiece.genre}
        artist={artPiece.artist}
        year={artPiece.year}
        onToggleFavourite={onToggleFavourite}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
