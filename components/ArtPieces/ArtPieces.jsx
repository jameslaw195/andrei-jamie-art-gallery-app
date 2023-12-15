import React from "react";

export default function ArtPieces({ artPiece }) {
  return (
    <>
      <h1>{artPiece.map((artPiece) => artPiece.name)}</h1>
    </>
  );
}
