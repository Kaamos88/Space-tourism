import { useDispatch, useSelector } from "react-redux";
import { showPerson } from "../features/crew/crewSlice";
import s from "../styles/components/CrewNav.module.scss";
const CrewNav = () => {
  const dispatch = useDispatch();
  const { activePerson } = useSelector((store) => store.crew);
  return (
    <div className={s.nav}>
      <ul>
        <li
          onClick={() => dispatch(showPerson(0))}
          className={activePerson === 0 ? s.active : ""}
        ></li>
        <li
          onClick={() => dispatch(showPerson(1))}
          className={activePerson === 1 ? s.active : ""}
        ></li>
        <li
          onClick={() => dispatch(showPerson(2))}
          className={activePerson === 2 ? s.active : ""}
        ></li>
        <li
          onClick={() => dispatch(showPerson(3))}
          className={activePerson === 3 ? s.active : ""}
        ></li>
      </ul>
    </div>
  );
};

export default CrewNav;
