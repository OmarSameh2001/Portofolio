
import styles from "./page.module.css";
import Projects from "./projects/projects";
import Skills from "./skills/skills";
import omar from "./assets/pic.png";
import Header from "./header/header";

export default function Home() {
  return (
    <>
      <Header />
      <Projects />
    </>
  );
}
