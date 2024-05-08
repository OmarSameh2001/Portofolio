"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const height = window.innerHeight;
  console.log(height);
  return (
    <div
      className="mx-auto"
      style={{
        backgroundColor: "white",
        height: "10vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        position: "fixed",
        zIndex: "1",
      }}
    >
      <h1
        className="col-md-9"
        style={{ margin: "0", paddingLeft: "5vw", cursor: "pointer" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Omar Sameh
      </h1>
      <div
        className="col-md-2"
        style={{
          margin: "0",
          padding: "0",
          display: "flex",
          paddingTop: "1vh",
          justifyContent: "space-between",
        }}
      >
        <p
          className="px-1"
          style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
          onClick={() => window.scrollTo({ top: height, behavior: "smooth" })}
        >
          Projects
        </p>
        <p
          className="px-1"
          style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
          onClick={() => window.scrollTo({ top: height*5, behavior: "smooth" })}
        >
          Contact
        </p>
      </div>
    </div>
  );
}
