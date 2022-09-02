import { useSelector } from "react-redux";
import s from "../styles/components/TechnologySection.module.scss";
import TechnologyNav from "./TechnologyNav";

const TechnologySection = () => {
  let width;
  if (typeof window !== "undefined") {
    width = screen.width;
  }
  const { technology } = useSelector((store) => store.technology);
  const image =
    width > 1024 ? technology.images.portrait : technology.images.landscape;
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
        {width > 1024 ? (
          <img src={technology.images.portrait} />
        ) : (
          <img src={technology.images.landscape} />
        )}
      </section>
    </main>
  );
};

export default TechnologySection;
