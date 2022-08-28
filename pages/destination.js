import s from "../styles/Pages.module.scss";
import Nav from "../components/Nav";
import DestinationSection from "../components/DestinationSection";
import Heading from "../components/Heading";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavNumber, setHeading } from "../features/nav/navSlice";

const Destination = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNavNumber("01"));
    dispatch(setHeading("pick your destination"));
  }, []);
  return (
    <div className={`${s.app} ${s.destination}`}>
      <Nav />
      <Heading />
      <DestinationSection />
    </div>
  );
};

export default Destination;
