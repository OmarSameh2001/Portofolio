import Image from "next/image";
import styles from "./page.module.css";
import Projects from "./projects/projects";
import Skills from "./skills/skills";
import Contact from "./contact/contact";
import omar from "./assets/pic.png";

export default function Home() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          paddingTop: "10vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#171717",
          border: "rounded",
        }}
      >
        <div
          className="card"
          style={{
            minHeight: "80vh",
            minWidth: "80vw",
            backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: "10vh",
          }}
        >
          <div className="col-md-7">
            <Image src={omar} alt="omar" style={{ width: "150px", height: "150px" }} />
            <h1>Hi, I am Omar a Web Developer</h1>
          </div>

          <div className="col-md-2">
            <p>
              A web developer specializing in React, Next.js, and JavaScript
              frameworks. With expertise in HTML, CSS, Node.js, and Express, I
              create seamless, responsive, and scalable web applications. Lets
              bring your ideas to life!
            </p>
            <div
              className="line"
              style={{
                border: "1px solid white",
                height: "3px",
              }}
            ></div>
            <p>
              Senior-year computer science student, with a great passion for
              programming, which brought me to the Arab Open University where I
              am pursuing my bachelors degree.
            </p>
          </div>
        </div>
      </div>
      <Projects />
    </>
  );
}
