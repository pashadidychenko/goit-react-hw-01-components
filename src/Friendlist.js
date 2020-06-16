import React from "react";
import styles from "./css/friend.module.css";
import PropTypes from "prop-types";
import FriendListItem from "./FriendlistItem.js";

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      <FriendListItem friends={friends} />
    </ul>
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
