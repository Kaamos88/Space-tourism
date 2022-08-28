import Head from "next/head";
import s from "../styles/Pages.module.scss";
import Nav from "../components/Nav";
import DestinationModule from "../components/DestinationModule";

const Destination = () => {
  return (
    <div className={`${s.app} ${s.destination}`}>
      <Nav destination={true} />
      <DestinationModule />
    </div>
  );
};

export default Destination;
