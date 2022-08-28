import Link from "next/link";
import { useState } from "react";
import s from "../styles/Nav.module.scss";

const Nav = ({ home, destination, crew, technology }) => {
  const nav00 = home ? s.active : "";
  const nav01 = destination ? s.active : "";
  const nav02 = crew ? s.active : "";
  const nav03 = technology ? s.active : "";

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
      <nav className={s.navContainer}>
        <ul className={s.navBar}>
          <Link href="/">
            <li className={nav00}>
              <a>
                <span>00</span> Home
              </a>
            </li>
          </Link>
          <Link href="/destination">
            <li className={nav01}>
              <a>
                <span>01</span> Destination
              </a>
            </li>
          </Link>
          <Link href="/crew">
            <li className={nav02}>
              <a>
                <span>02</span> Crew
              </a>
            </li>
          </Link>
          <Link href="/technology">
            <li className={nav03}>
              <a>
                <span>03</span> Technology
              </a>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
