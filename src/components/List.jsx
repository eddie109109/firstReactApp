import React from "react";

function List() {
  return (<div>
    <h3 className="reactWork">React Work</h3>
    <ul>
      <li>Day 0
        <a href="#" className="fade-in">
          &nbsp;This Home Page</a>
      </li>
      <li>Day 1
        <a href="https://eddie109109.github.io/secondReactToDoList/" className="fade-in">
          &nbsp;Simple To Do List App</a>
      </li>
      <li>Day 2
        <a href="https://eddie109109.github.io/thirdReactWeakTicTacToe/" className="fade-in">
          &nbsp;Weak AI Tic-Tac-Toe</a>
      </li>
      <li>Day 3
        <a href="https://eddie109109.github.io/fourthReactUnbeatableTicTacToe/" className="fade-in">
          &nbsp;Unbeatable AI Tic-Tac-Toe</a>
      </li>
    </ul>
  </div>);
}

export default List;
