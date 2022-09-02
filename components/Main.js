import s from "../styles/components/Main.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <main className={s.main}>
      <section className={s.welcomeText}>
        <h5>So, you want to travel to</h5>
        <h1>Space</h1>
        <p className={s.text}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <Link href="/destination">
        <button className={s.circleBtn}>Explore</button>
      </Link>
    </main>
  );
};

export default Main;
