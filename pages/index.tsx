import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Jose Boschero | Fullstack Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="description"
          content="Jose Boschero | Fullstack Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Jose Boschero | Fullstack Developer"
        />
        <meta name="description" content="Hey! I'm Jose Boschero" />

        <meta
          property="og:title"
          content="Jose Boschero | Fullstack Developer"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://joseboschero.xyz/" />
        <meta
          property="og:image"
          content="https://joseboschero.xyz/screenshot.png"
        />
        <meta property="og:description" content="Hey! I'm Jose Boschero" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@joseboschero" />
        <meta
          name="twitter:title"
          content="Jose Boschero | Fullstack Developer"
        />
        <meta name="twitter:description" content="Hey! I'm Jose Boschero" />
        <meta name="twitter:creator" content="@joseboschero" />
        <meta
          name="twitter:image"
          content="https://joseboschero.xyz/screenshot.png"
        />
      </Head>
      <Home />
    </>
  );
}
