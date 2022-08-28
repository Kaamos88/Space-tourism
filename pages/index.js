import Head from "next/head";
import s from "../styles/Pages.module.scss";
import Main from "../components/Main";
import Nav from "../components/Nav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavNumber } from "../features/nav/navSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNavNumber("00"));
  }, []);
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
      <Nav />
      <Main />
    </div>
  );
}
