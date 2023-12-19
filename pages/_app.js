import GlobalStyle from "../styles";
import useSWR from "swr";
import "../app.css";
import Layout from "@/components/Layout/Layout";
import { useImmerLocalStorageState } from "./lib/hook/useImmerLocalStorageState";

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

  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  function handleToggleFavourite(clickedSlug) {
    const artPieceFavourite = artPiecesInfo.find(
      (piece) => piece.slug === clickedSlug
    );

    if (artPieceFavourite) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === clickedSlug
            ? { slug: clickedSlug, isFavourite: !pieceInfo.isFavourite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([
        ...artPiecesInfo,
        { slug: clickedSlug, isFavourite: true },
      ]);
    }
  }

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          artPiece={artPiece}
          artPiecesInfo={artPiecesInfo}
          onToggleFavourite={handleToggleFavourite}
        />
      </Layout>
    </>
  );
}
