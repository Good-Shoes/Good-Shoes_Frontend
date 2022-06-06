import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Board } from "../components/drawing_board/Style";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Board />
      <h1 className="contents">
        hey{" "}
        <Link href="posts/first-post">
          <a>Next.js</a>
        </Link>
      </h1>
    </>
  );
};

export default Home;
