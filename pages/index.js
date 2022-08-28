import Head from "next/head";
import s from "../styles/Pages.module.scss";
import Main from "../components/Main";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className={`${s.app} ${s.home}`}>
      <Head>
        <title>Space tourism</title>
        <meta
          name="description"
          content="Next app, inspired by frontendmentor.io"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Nav home={true} />
      <Main />
    </div>
  );
}
