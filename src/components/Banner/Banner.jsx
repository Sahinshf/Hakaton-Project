import React from "react";
import Styles from "./Banner.module.css";
import Button from "../Button/Button";
import BannerImage from "../../assets/images/image0_0_2.jpg";

const Banner = () => {
  return (
    <div className={`${Styles.app__home__section} `}>
      <div className={`${Styles.app__home} container`}>
        <div className={`${Styles.app__home__banner}`}>
          <div className={`${Styles.app__home__banner__left} `}>
            <h1>Discover, Play, and Master the Mind</h1>
            <p>
              Embark on an educational odyssey, solve challenges, and attain
              mastery through interactive gameplay adventures
            </p>
            <Button
              color={
                "linear-gradient(to right,#34b15e 0%,#73e09a 50%,#34b15e 100%)"
              }
              name={"Download Now"}
            />
          </div>
          <div className={`${Styles.app__home__banner__right}`}>
            <img
              src={BannerImage}
              className={Styles.app__home__banner__right__image}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
