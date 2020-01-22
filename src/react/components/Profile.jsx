import React from "react";

import profilImg from "assets/profil.jpg";

import styles from "sass/components/profile.module.scss";

const Profile = () => {
  return (
    <div className={`contentbox ${styles.profil}`}>
      <div>
        <h2>Profile</h2>
        <img src={profilImg} alt='profil' />
        <div>
          <p>
            I am Patcharanon W., a fresh graduate. I am looking for a front-end
            development job. Looking forward learning the minor details in
            building a web stack. Currently learning some deployment and
            responsive designs. Also interested in the designing paths.
          </p>
          <p>
            I am Thai. I can speak English proficiently and a little bit of
            French.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
