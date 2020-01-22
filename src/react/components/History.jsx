import React from "react";
import styles from "sass/components/history.module.scss";

const History = () => {
  return (
    <div className={`contentbox ${styles.history}`}>
      <div>
        <h2>Education</h2>
        <h4>Epitech exchange program</h4>
        <span>1 year of an overseas experience</span>
        <h4>Sirinthorn International Instituition of Technology (SIIT)</h4>
        <span>
          Bachelor of science, IT major Academic year 2017 Graduate (on
          20/5/2018)
        </span>
        <h4>Yothinburana School</h4>
        <span>High School Graduate</span>
        <h2>Internship</h2>
        <h4>Electricity generating authority of Thailand (EGAT)</h4>
        <span>
          IT office Used HTML, JS, CSS, jquery and PHP Requesting filtered
          database info fto show on the webpage
        </span>
      </div>
      {/* Break between education and skills*/}
      <div>
        <h2>Experience & skills</h2>
        <span>
          Tags: JS, CSS, React, HTML, ReactNative
          <br />
        </span>
        <span>English TOEIC(2018March)&emsp;&emsp;840/950</span>
        <h4>Projects </h4>
        <h4>Side project</h4>
        <p>
          A React + Redux learning project a sign-in, sign-up module with
          firebaseAuth & firestore with sass styles
        </p>
        <h4>College (2017~ 2018 Feb)</h4>
        <h4>SIIT senior project </h4>
        <p>
          A react native app + android watch OS linked with firebase using the
          database and cloud messaging to detect if someone has fallen
        </p>
        <h4>mini GIS project</h4>
        <p>
          A local HTML project using leafletJS library to provide map
          functionalities
        </p>
        <h4>React Native project</h4>
        <p>
          A room finding app with firebase has sorting functions according to
          alphabet and price in the scrollview tried react-native-maps library
        </p>
      </div>
    </div>
  );
};

export default History;
