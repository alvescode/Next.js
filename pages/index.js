import React from "react";
import styles from "../styles/Home.module.css";
import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  return (
    <div className={styles.home}>
      <p className={styles.title}>SOBRE MIM</p>
      <p className={styles.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p className={styles.title}>EXPERIÊNCIA</p>
      <ExperienceCard></ExperienceCard>
      <ExperienceCard></ExperienceCard>
      <p className={styles.title}>PROJETOS</p>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
    </div>
  );
};

export default Home;
