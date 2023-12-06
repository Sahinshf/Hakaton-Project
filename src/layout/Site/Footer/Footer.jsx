import React from "react";
import Styles from "./Footer.module.css";
import Logo from "../../../components/Logo/Logo";

const Footer = () => {
  return (
    <div className={Styles.app__home__footer__section}>
      <div className={`${Styles.app__home__footer} container`}>
        <div className={`${Styles.app__home__footer__content_container}`}>
          <div>
            <Logo />
            <p>
              Where Learning Meets Adventure, <br /> Igniting Curiosity and
              Knowledge
            </p>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Team</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3>Resource</h3>
            <ul>
              <li>Documentation</li>
              <li>IOS & Android Apps</li>
              <li>Privacy Policy</li>
              <li>Support Forum</li>
              <li>Terms Conditions</li>
            </ul>
          </div>
          <div>
            <h3>About</h3>
            <ul>
              <li>Company No: C5B345 CSINE GROUP LTD.</li>
              <li>Address: M-321 Volunt Ave, Staten Islandm, NY 201526</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
