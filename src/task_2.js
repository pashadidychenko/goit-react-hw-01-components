import React, { Fragment } from "react";
import styles from "./css/statistics.module.css";
import PropTypes from "prop-types";

var randomColor = require("randomcolor");

function Statistics({ title = "", stats }) {
  return (
    <Fragment>
      <div className={styles.statistics}>
        {title.length > 0 ? (
          <h2 className={styles.title}>Upload stats</h2>
        ) : (
          <></>
        )}
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
    </Fragment>
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
