import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jack Jones A.M. </span>
            from <span className="purple"> Zambonga del Sure, Philippines.</span>
            <br />
            I am currently a student from Sain Columban College.
            <br />

            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports like volleyball and baseball
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching anime and kdrama
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ka skeri baaaaaa!"{" "}
          </p>
          <footer className="blockquote-footer">Pretty, Jackie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
