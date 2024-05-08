"use client";
import next from "next";
import React, { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.github.com/users/OmarSameh2001/repos?sort=pushed&direction=desc"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error; // rethrow the error so it can be caught by the caller
    }
  }

  useEffect(() => {
    async function fetchDataAndSetRepos() {
      try {
        const result = await fetchData();
        setRepos(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDataAndSetRepos();
  }, []);

  return (
    <>
    <h1 style={{paddingTop: "10vh", color: "white", backgroundColor: "black", paddingBottom: "3vh"}} className="text-center m-0">Projects</h1>
    <div
      style={{
        maxHeight: "100vh",
        maxWidth: "100vw",
        paddingBottom: "5vh",
        marginBottom: "10vh",
        backgroundColor: "black",
        display: "flex", // Stack children vertically
        overflowY: "auto",
      }}
      className="App-header mx-auto px-4"
    >
      
      <div className="row w-100">
        {repos.map((repo) => (
          <a
            key={repo.id}
            className="card col-md-4 text-center my-1 py-1"
            href={repo.html_url}
            target="_blank"
            style={{textDecoration: "none", color: "white", backgroundColor: "black", border: "1px solid white"}}
          >
            <h3 className="card-title">{repo.name}</h3>
            <div
              className="line"
              style={{
                border: "1px solid white",
                height: "1px",
              }}
            ></div>
            <p className="card-text">{repo.description}</p>
          </a>
        ))}
      </div>
    </div></>
    
  );
}
