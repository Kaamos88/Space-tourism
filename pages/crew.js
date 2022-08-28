import Head from "next/head";
import s from "../styles/Pages.module.scss";
import Nav from "../components/Nav";

const crew = () => {
  return (
    <div className={`${s.app} ${s.crew}`}>
      <Nav crew={true} />
    </div>
  );
};

export default crew;
