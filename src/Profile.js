import React from "react";
import PropTypes from "prop-types";
import styles from "./css/profile.module.css";

function Profile({ name, avatar, tag, location, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.list}>
          <span>Followers</span>
          <br></br>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.list}>
          <span>Views</span>
          <br></br>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.list}>
          <span>Likes</span>
          <br></br>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
