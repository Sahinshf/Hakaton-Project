import React from "react";
import Style from "./RoadmapEffeciency.module.css";
import Button from "../Button/Button";

const RoadmapEffenciency = () => {
  return (
    <div className={Style.app__roadmapeffeciency__section}>
      <div className={`${Style.app__roadmapeffeciency} container`}>
        <div className={Style.app__roadmapeffeciency__left}>
          <img
            src="https://preview.uideck.com/items/crypto/assets/img/xgrows-img.png.pagespeed.ic.2aGtqFCa9B.webp"
            alt=""
          />
        </div>
        <div className={Style.app__roadmapeffeciency__right}>
          <h4 className={Style.app__roadmapeffeciency__right__header}>
            Great Effeciency Like Never Before
          </h4>
          <p>
            In a constantly evolving educational landscape, our commitment lies
            in delivering unparalleled efficiency through innovative learning
            solutions. At Brain Navigator, we've reimagined the educational
            gaming experience to bring forth a realm of unparalleled efficiency
            that transcends traditional learning methods. Through our
            meticulously crafted platform, students encounter an educational
            journey like no other. Each facet of our game is curated to infuse
            efficiency into the learning process, fostering engagement and
            intellectual growth simultaneously. Our interactive learning maps
            pave the way for an efficient navigation system, seamlessly guiding
            students through captivating challenges and educational quests. The
            convergence of play and learning ensures that every moment spent
            within our game is an efficient stride toward knowledge acquisition.
            Embracing efficiency doesn’t mean compromising on depth. We provide
            an immersive experience designed to unlock a learner's potential.
            <br /> <br />
            Adaptive difficulty levels ensure an efficient learning pace
            tailored to individual progress, promoting an optimal balance
            between challenge and accomplishment. With a dynamic feedback
            system, efficiency meets effectiveness, offering tailored guidance
            and insights, augmenting the learning journey. This commitment to
            efficiency isn’t just a promise; it’s the cornerstone of our
            educational ethos, ensuring that every interaction with our platform
            leads to a more efficient and fruitful educational experience. Join
            us and witness the great efficiency in learning, redefined
          </p>
          <Button
            color="linear-gradient(to right,#365ae1 0%,#6286eb 50%,#365ae1 100%)"
            name="Download History"
          />
        </div>
      </div>
    </div>
  );
};

export default RoadmapEffenciency;
