import React, { Fragment } from "react";
// Task 1
import user from "./data/user.json";
import Profile from "./Profile.js";
// Task 2
import statisticalData from "./data/statistical-data.json";
import Statistics from "./Statistics.js";
// Task 3
import friends from "./data/friends.json";
import FriendList from "./Friendlist.js";
// Task 4
import transactions from "./data/transactions.json";
import TransactionHistory from "./Transaction.js";

function App() {
  return (
    <Fragment>
      <h2>Task 1</h2>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Task 2</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
      <h2>Task 3</h2>
      <FriendList friends={friends} />
      <h2>Task 4</h2>
      <TransactionHistory items={transactions} />
    </Fragment>
  );
}

export default App;
