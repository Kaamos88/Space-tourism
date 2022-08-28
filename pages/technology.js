import Head from "next/head";
import s from "../styles/Pages.module.scss";
import Nav from "../components/Nav";
import Heading from "../components/Heading";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavNumber, setHeading } from "../features/nav/navSlice";
import TechnologySection from "../components/TechnologySection";

const technology = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNavNumber("03"));
    dispatch(setHeading("Space Launch 101"));
  }, []);
  return (
    <div className={`${s.app} ${s.technology}`}>
      <Nav />
      <Heading />
      <TechnologySection />
    </div>
  );
};

export default technology;
