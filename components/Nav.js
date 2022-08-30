import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { closeNav, openNav } from "../features/nav/navSlice";
import s from "../styles/components/Nav.module.scss";

const Nav = () => {
  const { navNumber, isOpen } = useSelector((store) => store.nav);
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <div className={s.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <div className={s.vl}></div>
      <nav className={`${s.navContainer} ${!isOpen ? s.close : s.open}`}>
        <div className={s.closeIcon}>
          <div onClick={() => dispatch(closeNav())}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          </div>
        </div>
        <ul className={s.navBar}>
          <Link href="/">
            <li className={navNumber === "00" ? s.active : ""}>
              <a>
                <span>00</span> Home
              </a>
            </li>
          </Link>
          <Link href="/destination">
            <li className={navNumber === "01" ? s.active : ""}>
              <a>
                <span>01</span> Destination
              </a>
            </li>
          </Link>
          <Link href="/crew">
            <li className={navNumber === "02" ? s.active : ""}>
              <a>
                <span>02</span> Crew
              </a>
            </li>
          </Link>
          <Link href="/technology">
            <li className={navNumber === "03" ? s.active : ""}>
              <a>
                <span>03</span> Technology
              </a>
            </li>
          </Link>
        </ul>
      </nav>
      <div className={!isOpen ? s.openIcon : s.displayNone}>
        <div onClick={() => dispatch(openNav())} >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Nav;
