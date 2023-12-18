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

  // useEffect(() => {
  const newPiece = artPiece.find((piece) => piece.slug === slug);
  // }, [artPiece, slug]);

  if (!artPiece) {
    return null;
  }
  console.log("art piece info", artPiecesInfo);

  return (
    <>
      <h1>Hi art piece details</h1>
      <ArtPieceDetails
        name={newPiece.name}
        image={newPiece.imageSource}
        genre={newPiece.genre}
        artist={newPiece.artist}
        year={newPiece.year}
        onToggleFavourite={onToggleFavourite}
        artPiecesInfo={artPiecesInfo}
        slug={newPiece.slug}
      />
    </>
  );
}
