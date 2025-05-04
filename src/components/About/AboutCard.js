import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kashish Syed </span>
            from <span className="purple"> Lincoln, Nebraska.</span>
            <br />
            I'm currently pursuing a Bachelor's degree in Computer Science from the University of Nebraska - Lincoln.
            <br />
            I am actively seeking Software Engineering Internship opportunities.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Code with purpose, design with passion, and always stay curious."{" "}
          </p>
          <footer className="blockquote-footer">Kashish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
