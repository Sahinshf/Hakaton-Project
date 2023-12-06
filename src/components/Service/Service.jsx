import React from "react";
import Styles from "./Service.module.css";

const Service = () => {
  const services = [
    {
      id: 1,
      name: "Educational Challenges",
      description:
        "Encounter diverse challenges at each step, reinforcing learning through fun quizzes and puzzles",
      icon: "lni lni-book",
    },
    {
      id: 2,
      name: "Unlockable Rewards",
      description:
        "Earn badges, in-game currency, and special items for completing challenges and milestones.",
      icon: "lni lni-gift",
    },
    {
      id: 3,
      name: "Varied Educational Topics",
      description:
        "Explore diverse subjects, including history, science, literature, and more.",
      icon: "lni lni-tab",
    },
    {
      id: 4,
      name: "In-depth Knowledge Base",
      description:
        "Dive into an extensive library of educational content for comprehensive learning across various subjects.",
      icon: "lni lni-files",
    },
    {
      id: 5,
      name: "Educator Resources",
      description:
        "Access resources and tools for educators to facilitate learning in classrooms or homeschooling environments.",
      icon: "lni lni-bolt-alt",
    },
    {
      id: 6,
      name: "Dynamic Feedback System",
      description:
        "Experience a tailored learning experience through a dynamic feedback system that adapts to individual progress.",
      icon: "lni lni-comments-reply",
    },
  ];

  return (
    <div className={Styles.app__service__section}>
      <div className={`${Styles.app__service} container`}>
        <div className={Styles.app__service__top}>
          <h2>Our Awesome Features</h2>
          <p>
            Discover the Excellence: 6 Outstanding Educational Game Features
            Unveiled
          </p>
        </div>
        <div className={Styles.app__service__bottom}>
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className={Styles.app__service__bottom__item}
              >
                <div className={Styles.app__service__bottom__item__icon}>
                  {/* <i
                    className={`${service.icon} ${Styles.app__service__bottom__item__icon}`}
                  ></i> 
                  */}
                  <i className={service.icon}></i>
                </div>
                <h2>{service.name}</h2>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
