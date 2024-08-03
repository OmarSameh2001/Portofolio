import React from "react";
import Image from "next/image";
import omar from "../assets/pic.png";
export default function Header() {
  return (
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
          minHeight: "90vh",
          minWidth: "90vw",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "10vh",
        }}
      >
        <div className="col-md-4 position-relative">
          <Image
            src={omar}
            alt="omar"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              opacity: "0.4",
            }}
          />
          <h1 style={{ position: "absolute", top: "5%" }}>
            Hi, I am Omar a Web Developer
          </h1>
        </div>

        <div className="col-md-5 px-1" style={{ maxHeight: "80%", maxWidth: "60%", alignSelf: "center" }}>
          <p>
            A Web Developer specialized in MERN stack development. With
            experience in creating and maintaining web applications. I create
            seamless, responsive, and scalable web applications. Lets bring your
            ideas to life!
          </p>
          <div
            className="line"
            style={{
              border: "1px solid white",
              height: "3px",
            }}
          ></div>
          <p>
            Fresh Computer Science graduate from the Arab Open University, Where
            I have gained knowledge and experience in various programming
            languages and technologies. Eager to apply my skills in real-world
            projects and continue learning in a dynamic environment.
          </p>
        </div>
      </div>
    </div>
  );
}
