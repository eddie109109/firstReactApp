import React from "react";

function List() {
  return (<div>
    <h3 className="reactNodejsWork"> <span className="spanJavascriptColor">Javascript</span> && <span className="spanReactColor">React</span> && <span className="spanNodejsColor">Node.js</span> work</h3>
    <ul>
      <li>Day 0
        <a href="https://eddie109109.github.io/firstReactApp/" className="fade-in">
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
      <li>Day 4
        <a href="https://weather-api-eddie.herokuapp.com/" className="fade-in" style={{color:"#3B823C"}}>
          &nbsp;Weather API with Node.js to practise MVC model structing</a>
      </li>
      <li>Day 5
        <a href="https://eddie109109.github.io/sixthReactVideoImageAPIApp/" className="fade-in" >
          &nbsp;Video/Image API App</a>
      </li>
      <li>Day 6
        <a href="https://eddie109109.github.io/seventhSelfIntroduction/" className="fade-in" style={{color:"#EFD819"}}>
          &nbsp;Self-Introduction App</a>
      </li>
    </ul>
  </div>);
}

export default List;