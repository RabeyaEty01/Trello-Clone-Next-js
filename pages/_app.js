import Head from "next/head";
import { Provider } from "react-redux";
import store from "../src/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Trello Clone</title>
      </Head>
      <Provider store={store}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
