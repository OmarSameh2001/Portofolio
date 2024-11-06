import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      style={{ backgroundColor: "white", color: "black", padding: "20px 0" }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ flex: 1, maxWidth: "50%" }}>
          <h3>Contact Information</h3>
          <div style={{ padding: "0 1%" }}>
            <p>Name: Omar Sameh</p>
            <p>
              Phone: +20 1024081411{" "}
              <a
                href="https://wa.me/+201024081411"
                target="_blank"
                style={{ color: "green" }}
              >
                <FaWhatsapp />
              </a>
            </p>
            <p>
              Email:{"  "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=omarsameh20017@gmail.com"
                target="_blank"
                style={{ color: "black", width: "50%" }}
              >
                omarsameh20017@gmail.com
              </a>
            </p>
            <p>Address: Cairo, Egypt</p>
          </div>
        </div>
        <div style={{ flex: 1, maxWidth: "50%", textAlign: "center" }}>
          <h3>Connect with Me</h3>
          <ul style={{ padding: 0, listStyleType: "none" }}>
            <li style={{ marginBottom: 5 }}>
              <a
                href="https://www.linkedin.com/in/omarsameh2001/"
                target="_blank"
                style={{ color: "black" }}
              >
                LinkedIn
              </a>
            </li>
            <li style={{ marginBottom: 5 }}>
              <a
                href="https://github.com/OmarSameh2001"
                target="_blank"
                style={{ color: "black" }}
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
