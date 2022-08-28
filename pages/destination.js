import Head from "next/head";
import s from "../styles/Pages.module.scss";
import Nav from "../components/Nav";

const Destination = () => {
  return (
    <div className={`${s.app} ${s.destination}`}>
      <Nav destination={true} />
    </div>
  );
};

export default Destination;
