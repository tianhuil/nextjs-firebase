import type { AppProps } from "next/app";
import "normalize.css/normalize.css";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    console.log("a");
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./sw.js")
        .then(function (registration) {
          console.log("Service Worker Registered", registration);
        })
        .catch(function (err) {
          console.log("Service Worker Failed to Register", err);
        });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
