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
        <div
          className="col-md-4 position-relative"
          style={{ borderRadius: "10px", border: "1px solid #777777" }}
        >
          <Image
            src={omar}
            alt="omar"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              opacity: "0.35",
            }}
          />
          <h1 style={{ position: "absolute", top: "5%", left: "2%" }}>
            Hi, I am Omar a Web Developer
          </h1>
        </div>

        <div
          className="col-md-5 mx-1 p-2"
          style={{
            height: "100%",
            maxWidth: "60%",
            border: "1px solid #777777",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10%",
          }}
        >
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
              height: "2px",
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
