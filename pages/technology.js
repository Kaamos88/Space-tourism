import Head from "next/head";
import s from "../styles/Pages.module.scss";
import Nav from "../components/Nav";

const technology = () => {
  return (
    <div className={`${s.app} ${s.technology}`}>
      <Nav technology={true} />
    </div>
  );
};

export default technology;
