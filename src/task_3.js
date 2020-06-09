import React, { Fragment } from "react";
import styles from "./css/friend.module.css";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <Fragment>
      <ul className={styles.friendList}>
        {friends.map((friend) => {
          let status =
            friend.isOnline === true ? styles.statusGreen : styles.statusRed;
          return (
            <li className={styles.item} key={friend.id}>
              <span className={status}></span>
              <img
                className={styles.avatar}
                src={friend.avatar}
                alt={friend.name}
                width="100"
              />
              <p className={styles.name}>{friend.name}</p>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
