import { useDispatch, useSelector } from "react-redux";
import { showTechnology } from "../features/technology/technologySlice";
import s from "../styles/components/TechnologyNav.module.scss";

const TechnologyNav = () => {
  const { activeTechnology } = useSelector((store) => store.technology);
  const dispatch = useDispatch();
  return (
    <nav className={s.nav}>
      <ul>
        <li
          onClick={() => dispatch(showTechnology(0))}
          className={activeTechnology === 0 ? s.active : ""}
        >
          1
        </li>
        <li
          onClick={() => dispatch(showTechnology(1))}
          className={activeTechnology === 1 ? s.active : ""}
        >
          2
        </li>
        <li
          onClick={() => dispatch(showTechnology(2))}
          className={activeTechnology === 2 ? s.active : ""}
        >
          3
        </li>
      </ul>
    </nav>
  );
};

export default TechnologyNav;
