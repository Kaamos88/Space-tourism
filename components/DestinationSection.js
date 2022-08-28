import { useSelector } from "react-redux";
import PlanetsNav from "./PlanetsNav";
import s from "../styles/components/DestinationSection.module.scss";

const DestinationModule = () => {
  const { planet } = useSelector((store) => store.destination);

  return (
    <div className={s.module}>
      <div className={s.imgSection}>
        <img src={planet.images.png} />
      </div>
      <div className={s.textSection}>
        <PlanetsNav />
        <div className={s.description}>
          <h2>{planet.name}</h2>
          <p>{planet.description}</p>
        </div>
        <div className={s.vl}></div>
        <div className={s.footer}>
          <div>
            <p>avg. distance</p>
            <h5>{planet.avgDistance}</h5>
          </div>
          <div>
            <p>Est. travel time</p>
            <h5>{planet.travelTime}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationModule;
