import React from "react";
import Style from "./Feature.module.css";
import Map from "../../assets/images/Specialities-Map.png";
import AdaptiveLearning from "../../assets/images/Specialities-AdaptiveLearning.png";
import NarrativeAdventures from "../../assets/images/Specialities-NarrativeAdventures.png";

const Feature = () => {
  const specialities = [
    {
      id: 1,
      img: Map,
      name: "Interactive Learning Maps",
      description:
        "Immersive maps guide learners through captivating educational challenges and quests.",
    },
    {
      id: 2,
      img: AdaptiveLearning,
      name: "Tailored Adaptive Learning",
      description:
        "Adaptable content tailored to individual progress, fostering personalized educational experiences . ",
    },
    {
      id: 3,
      img: NarrativeAdventures,
      name: "Engaging Narrative Adventures",
      description:
        "Exciting narratives integrated into quests for an immersive educational experience .",
    },
  ];

  return (
    <div className={`${Style.app__home__feature__section}`}>
      <div className={`${Style.app__home__feature} container`}>
        <div className={Style.app__home__feature__top}>
          <h1>Our Specialities</h1>
          <p>
            Exceptional Educational Offerings: Unveiling Our Unique Specialties
            in Interactive Learning, Tailored Adaptation, and Engaging
            Story-Driven Quests
          </p>
        </div>
        <div className={Style.app__home__feature__bottom}>
          {specialities.map((speciality) => {
            return (
              <div
                key={speciality.id}
                className={Style.app__home__feature__bottom__speciality}
              >
                <img src={`${speciality.img}`} alt="" />
                <h2>{speciality.name}</h2>
                <p>{speciality.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
