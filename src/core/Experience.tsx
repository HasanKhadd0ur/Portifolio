import style from "./Experience.module.css";

function Experience() {
  return (
    <section className={style.experience} id="Experience">
      <h2 className={style.title}>Experience</h2>
      <div className={style.timeline}>
        <div className={style.item}>
          <h3>Fullstack Web Developer- FreeLance</h3>
          <span>2023 - Present</span>
          <p>
             Delivered scalable, production-grade web applications, applying <strong>Clean Architecture </strong> and <strong> Domain Drivn Design (DDD) </strong> in ASP.NET Core.
          </p>
          <p>
             Built and deployed modular frontends in <strong>React.js </strong> and <strong>Angular</strong>, enhancing user experience and maintainability.
          </p>
        </div>
        <div className={style.item}>
          <h3>University Collegiate Programming Contests (HIAST-CPC ) Contest – HIAST</h3>
          <span>2021, 2022, 2024</span>
          <p>
             Participated in the HIAST-CPC, showcasing algorithmic problem-solving and teamwork
          </p>
        </div>
        <div className={style.item}>
          <h3>Syrian Informatics Olympiad – SSO Syria</h3>
          <span>2018, 2019</span>
          <p>
          Competed in the Syrian Scientific Olympiad in Informatics at the national level, demonstrating advanced problem-solving
and analytical skills
      </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
