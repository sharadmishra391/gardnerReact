import React from "react";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate=useNavigate();

  const gotoquestions= () =>{
    navigate('/booksomeone')
  }

  return (
    <>
      <div className="aboutsection">
        <h1 style={{ fontWeight: "800" }}>
          Need to find a Gardener in Bhopal?
        </h1>
        <br />
        <ul>
          <li>
            We’ll connect you with the best Gardeners in Bhopal in minutes.
            Start your search and get free quotes today!
          </li>
          <br />
          <li>
            Whether you’re looking for quotes or you’re ready to hire, or if
            you’d like to speak with some Bhopal-based Gardeners, we can help
          </li>
          <br />
          <li>
            First time looking for a Gardener and not sure where to start? Let
            us do the legwork for you. Tell us about your project and we’ll send
            you a list of Gardeners in Bhopal to review.
          </li>
          <br />
          <li>
            There’s no pressure to hire, so you can compare profiles, read
            previous reviews and ask for more information before you make your
            decision.
          </li>
          <br />
          <li>Best of all - it’s completely free!</li>
          <br />
        </ul>
        <Button
          onClick={gotoquestions}
          style={{ width: "500px", marginLeft: "10px" }}
          variant="outline-primary"
        >
          Find a Gardner Today!
        </Button>
      </div>

      <div className="aboutsection2">
        <Card style={{ width: "18rem" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKWX0O6OaYu14lqsN8cXAVpCsVyE1ZImrUA&s" />
          <Card.Body>
            <Card.Title>Tell us what you need</Card.Title>
            <Card.Text>
              We’ll help you find Gardeners in Bhopal. Help us refine your
              search by telling us your requirements and we’ll contact service
              providers in your area to help you
            </Card.Text>
            <Button onClick={gotoquestions} variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <img src="data:image/jpeg;base64,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" />
          <Card.Body>
            <Card.Title>Receive Free Quotes</Card.Title>
            <Card.Text>
              You’ll receive free quotes from professionals in Bhopal and get
              quick notifications via our website or app. We make sure we do the
              leg work for you!
            </Card.Text>
            <Button onClick={gotoquestions} variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <img src="data:image/jpeg;base64,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" />
          <Card.Body>
            <Card.Title>Choose your Gardener</Card.Title>
            <Card.Text>
              Pick from some of the best providers in your area. With easy
              access to reviews and direct contact with Gardeners, you can be
              confident with your choice
            </Card.Text>
            <Button onClick={gotoquestions} variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default About;
