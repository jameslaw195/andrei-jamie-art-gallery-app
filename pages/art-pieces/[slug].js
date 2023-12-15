import { useRouter } from "next/router";

export default function ArtPieceDetails({ artPiece }) {
  const router = useRouter();
  const { slug } = router.query;

  console.log("art pice in Art pice detil page", artPiece);
  // const piece = artPiece.find((piece) => piece.slug === slug);

  return (
    <>
      <h1>Hi art piece details</h1>
      {/* <ArtPieceDetails
        name={piece.name}
        image={piece.imageSource}
        genre={piece.genre}
        artist={piece.artist}
        year={piece.year}
      /> */}
    </>
  );
}
