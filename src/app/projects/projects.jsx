"use client";
import React, { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.github.com/users/OmarSameh2001/repos?sort=created&direction=desc"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
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
      <h1
        style={{
          paddingTop: "10vh",
          color: "white",
          backgroundColor: "black",
          paddingBottom: "3vh",
        }}
        className="text-center m-0"
      >
        Projects
      </h1>
      <div
        style={{
          maxHeight: "100vh",
          maxWidth: "100vw",
          backgroundColor: "black",
          display: "flex",
          overflowY: "auto",
        }}
        className="App-header mx-auto px-4"
      >
        <div className="row w-100">
          {repos.map((repo) => (
            <div className="card col-md-4 text-center my-1 py-0 px-1 bg-transparent">
              <a
                key={repo.id}
                className="repo-card"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
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
            </div>
          ))}
        </div>
      </div>
      <p
        style={{
          paddingTop: "1vh",
          color: "white",
          backgroundColor: "black",
          paddingBottom: "1vh",
        }}
        className="text-center m-0"
      ></p>

      <style jsx>{`
        .repo-card {
          text-decoration: none;
          color: white;
          background-color: black;
          border: 1px solid white;
          border-radius: 5px;
          transition: background-color 0.3s ease, transform 0.3s ease;
          width: 100%;
          height: 100%;
        }

        .repo-card:hover {
          background-color: #333; /* Change to your desired hover color */
          transform: scale(1.01); /* Optional: slightly scale up the card */
        }
      `}</style>
    </>
  );
}
