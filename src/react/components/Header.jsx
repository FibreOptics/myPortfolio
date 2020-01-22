import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as N } from "assets/N.svg";
import styles from "sass/components/header.module.scss";

const Header = () => {
  return (
    <header className={`${styles.header} contentbox`}>
      <div className={styles.hexagon}>
        <span></span>
        <N className={styles.N} />
      </div>
      <h3 className={styles.Name}>Hi! I'm Patcharanon Wongmaethanukroah</h3>
      <nav className={styles.navlinks}>
        <Link to='/'>
          <div>Home</div>
        </Link>
        <Link to='/'>
          <div>Portfolio</div>
        </Link>
        <Link to='/'>
          <div>Contacts</div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
