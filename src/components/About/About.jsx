import React from "react";
import Styles from "./About.module.css";
import Button from "../Button/Button";

const About = () => {
  return (
    <div className={Styles.app__about__section}>
      <div className={`${Styles.app__about} container`}>
        <div className={Styles.app__about__left}>
          <img
            src="https://preview.uideck.com/items/crypto/assets/img/about-img.svg"
            alt=""
          />
        </div>
        <div className={Styles.app__about__right}>
          <h2>About Us</h2>
          <p>
            Welcome to Brain Navigator, where we believe in transforming
            education into an exciting adventure. At Brain Navigator, our
            passion lies in crafting immersive and interactive experiences that
            merge entertainment with learning. With a team dedicated to
            fostering curiosity and igniting a love for knowledge, we aim to
            empower students on their educational journey.
            <br />
            Our game blends exploration, problem-solving, and discovery to
            engage young minds in an enriching quest for learning. Join us as we
            embark on a mission to make learning fun, accessible, and rewarding
            for every student, one interactive challenge at a time
          </p>
          <Button
            color={
              "linear-gradient(to right,#365ae1 0%,#6286eb 50%,#365ae1 100%)"
            }
            name={"Learn More"}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
