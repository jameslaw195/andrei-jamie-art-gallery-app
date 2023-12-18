import GlobalStyle from "../styles";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";
import { useImmerLocalStorageState } from "./lib/hook/useImmerLocalStorageState";
import ArtPieceDetailsPage from "./art-pieces/[slug]";
import Layout from "@/components/Layout/Layout";

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
  // const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
  //   "Art Pieces Info",
  //   { defaultValue: [] }
  // );

  const { data: artPiece, error, isLoading } = useSWR(apiURL, fetcher);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      {/* <ArtPieceDetailsPage artPiece={artPiece} /> */}
      <Component
        {...pageProps}
        artPiece={artPiece}
        // artPiecesInfo={artPiecesInfo}
      />
      <Layout />
    </>
  );
}
