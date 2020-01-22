import React from "react";
import icon from "assets/symbol-defs.svg";
import styles from "sass/components/svg.module.scss";

const Svg = ({ className, name }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    className={styles[className]}
  >
    <use href={`${icon}#icon-${name}`} />
  </svg>
);

export default Svg;
