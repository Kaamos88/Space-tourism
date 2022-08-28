import s from "../styles/Pages.module.scss";
import Nav from "../components/Nav";
import CrewSection from "../components/CrewSection";
import Heading from "../components/Heading";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavNumber, setHeading } from "../features/nav/navSlice";

const Crew = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNavNumber("02"));
    dispatch(setHeading("Meet your crew"));
  }, []);
  return (
    <div className={`${s.app} ${s.crew}`}>
      <Nav />
      <Heading />
      <CrewSection />
    </div>
  );
};

export default Crew;
