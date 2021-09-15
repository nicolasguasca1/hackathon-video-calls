import "../styles/globals.css";
import type { AppProps } from "next/app";

import React from "react";

import { ContextProvider } from "../Context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
export default MyApp;
