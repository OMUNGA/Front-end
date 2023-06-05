import "../styles/globals.css";

import type { AppProps } from "next/app";
import { AppProvider } from "../context/AppContext";
import { ArticleProvider } from "../context/ArticlesProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ArticleProvider>
        <Component {...pageProps} />
      </ArticleProvider>
    </AppProvider>
  );
}

export default MyApp;
