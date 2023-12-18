import GlobalStyle from "../styles";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";
import ArtPieceDetailsPage from "./art-pieces/[slug]";
import Layout from "@/components/Layout/Layout";
import { useImmerLocalStorageState } from "./lib/hook/useImmerLocalStorageState";
import { useState } from "react";

const apiURL = "https://example-apis.vercel.app/api/art";

const fetcher = async (apiURL) => {
  const response = await fetch(apiURL);

  if (!response.ok) {
    const error = new Error("An error occured.");

    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

export default function App({ Component, pageProps }) {
  const { data: artPiece, error, isLoading } = useSWR(apiURL, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  function handleToggleFavourite(slug) {
    const artPieceFavourite = artPiecesInfo.find(
      (piece) => piece.slug === slug
    );

    if (artPieceFavourite) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavourite: !pieceInfo.isFavourite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavourite: true }]);
    }
  }

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPiece={artPiece}
        artPiecesInfo={artPiecesInfo}
        onToggleFavourite={handleToggleFavourite}
      />
      <Layout />
    </>
  );
}
