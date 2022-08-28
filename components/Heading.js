import { useSelector } from "react-redux";
import s from "../styles/components/Heading.module.scss";

const Heading = () => {
  const { navNumber, navHeading } = useSelector((store) => store.nav);
  return (
    <div className={s.heading}>
      <h5>
        <span>{navNumber}</span> {navHeading}
      </h5>
    </div>
  );
};

export default Heading;
