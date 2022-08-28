import { useSelector } from "react-redux";
import s from "../styles/components/TechnologySection.module.scss";
import TechnologyNav from "./TechnologyNav";

const TechnologySection = () => {
  const { technology } = useSelector((store) => store.technology);
  return (
    <main className={s.technologyModule}>
      <section className={s.textSection}>
        <TechnologyNav />
        <div className={s.text}>
          <p>TERMINOLOGY...</p>
          <h3>{technology.name}</h3>
          <p>{technology.description}</p>
        </div>
      </section>
      <section className={s.image}>
        <img src={technology.images.portrait} />
      </section>
    </main>
  );
};

export default TechnologySection;
