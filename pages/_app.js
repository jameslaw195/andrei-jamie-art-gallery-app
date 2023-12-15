import GlobalStyle from "../styles";
import useSWR from "swr";

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
  const { data: art, error, isLoading } = useSWR(apiURL, fetcher);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h1>{art.map((art) => art.name)}</h1>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
