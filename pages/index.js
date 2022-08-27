import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Main from "../components/Main";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Space tourism</title>
        <meta
          name="description"
          content="Next app, inspired by frontendmentor.io"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Nav />
      <Main />
    </div>
  );
}
