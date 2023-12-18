import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ArtPieceDetailsPage({ artPiece }) {
  const router = useRouter();
  const { slug } = router.query;

  console.log("slug here", slug);

  // console.log("art pice in Art pice detil page", artPiece);
  const piece = artPiece.find((piece) => piece.slug === slug);

  useEffect(() => {
    // artPiece.find((piece) => piece.slug === slug);
  }, [artPiece, slug]);

  if (!artPiece) {
    return null;
  }
  return (
    <>
      <h1>Hi art piece details hello</h1>
      <ArtPieceDetails
        // slug={piece.slug}
        name={piece.name}
        image={piece.imageSource}
        genre={piece.genre}
        artist={piece.artist}
        year={piece.year}
      />
      {/* {artPiece.map((piece) => piece.name)} */}
    </>
  );
}
