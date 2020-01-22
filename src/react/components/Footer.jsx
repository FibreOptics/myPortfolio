import React from "react";
import styles from "sass/components/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div>Footer</div>
        <p>
          Copyright © 2020&nbsp;Patcharanon W.&nbsp;•&nbsp;Gradually growing Web
          Developer
        </p>
      </div>
    </div>
  );
};

export default Footer;
