import React from "react";
import styles from "./css/statistics.module.css";
import PropTypes from "prop-types";

var randomColor = require("randomcolor");

function Statistics({ title = "", stats }) {
  return (
    <div className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      <ul className={styles.list}>
        {stats.map((el) => (
          <li
            className={styles.item}
            key={el.id}
            style={{ backgroundColor: `${randomColor()}` }}
          >
            <span>{el.label}</span>
            <br></br>
            <span>{el.percentage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
