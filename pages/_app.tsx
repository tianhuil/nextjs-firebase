import type { AppProps } from "next/app";
import "normalize.css/normalize.css";
import React from "react";
import "../comp/todoList.css";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
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
