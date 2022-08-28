import { useSelector, useDispatch } from "react-redux";
import { showPlanet } from "../features/destination/destinationSlice";
import s from "../styles/components/PlanetNav.module.scss";

const PlanetsNav = () => {
  const { activePlanet } = useSelector((store) => store.destination);
  const dispatch = useDispatch();

  return (
    <div className={s.nav}>
      <ul>
        <li
          onClick={() => dispatch(showPlanet(0))}
          className={activePlanet === 0 ? s.active : ""}
        >
          moon
        </li>
        <li
          onClick={() => dispatch(showPlanet(1))}
          className={activePlanet === 1 ? s.active : ""}
        >
          mars
        </li>
        <li
          onClick={() => dispatch(showPlanet(2))}
          className={activePlanet === 2 ? s.active : ""}
        >
          europa
        </li>
        <li
          onClick={() => dispatch(showPlanet(3))}
          className={activePlanet === 3 ? s.active : ""}
        >
          Titan
        </li>
      </ul>
    </div>
  );
};

export default PlanetsNav;
