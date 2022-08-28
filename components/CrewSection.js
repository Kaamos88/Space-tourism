import { useSelector } from "react-redux";
import s from "../styles/components/CrewSection.module.scss";
import CrewNav from "./CrewNav";

const CrewSection = () => {
  const { person } = useSelector((store) => store.crew);
  return (
    <main className={s.crewModule}>
      <section className={s.text}>
        <div>
          <h4>{person.role}</h4>
          <h3>{person.name}</h3>
          <p>{person.bio}</p>
        </div>
        <CrewNav />
      </section>
      <section>
        <img src={person.images.webp} />
      </section>
    </main>
  );
};

export default CrewSection;
