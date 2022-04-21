import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useInstall } from "../comp/install";

const Home: NextPage = () => {
  const [prompt, promptToInstall] = useInstall();
  const [isVisible, setVisibleState] = React.useState(false);
  const hide = () => setVisibleState(false);

  React.useEffect(() => {
    if (prompt) {
      setVisibleState(true);
    }
  }, [prompt]);

  return (
    <div>
      <Head>
        <title>NextJS Firebase Demo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main style={{ padding: 20 }}>
        <h2>Hello</h2>
        {isVisible && (
          <>
            <button onClick={promptToInstall}>Install</button>{" "}
            <button onClick={hide}>Dismiss</button>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
