import React from "react";

function List() {
  return (
    <div>
      <h3 className="reactNodejsWork">
        {" "}
        <span className="spanJavascriptColor">Javascript</span> &&{" "}
        <span className="spanReactColor">React</span> &&{" "}
        <span className="spanNodejsColor">Node.js</span> work
      </h3>
      <ul>
        <li>
          Day 0
          <a
            href="https://eddie109109.github.io/firstReactApp/"
            className="fade-in"
          >
            &nbsp;This Home Page
          </a>
        </li>
        <li>
          Day 1
          <a
            href="https://eddie109109.github.io/secondReactToDoList/"
            className="fade-in"
          >
            &nbsp;To Do List App(With Cached Function)
          </a>
        </li>
        <li>
          Day 2
          <a
            href="https://eddie109109.github.io/thirdReactWeakTicTacToe/"
            className="fade-in"
          >
            &nbsp;Weak AI Tic-Tac-Toe
          </a>
        </li>
        <li>
          Day 3
          <a
            href="https://eddie109109.github.io/fourthReactUnbeatableTicTacToe/"
            className="fade-in"
          >
            &nbsp;Unbeatable AI Tic-Tac-Toe
          </a>
        </li>
        <li>
          Day 4
          <a
            href="https://weather-api-eddie.herokuapp.com/"
            className="fade-in"
            style={{ color: "#3B823C" }}
          >
            &nbsp;Weather API with Node.js to practise MVC design pattern
          </a>
        </li>
        <li>
          Day 5
          <a
            href="https://eddie109109.github.io/sixthReactVideoImageAPIApp/"
            className="fade-in"
          >
            &nbsp;Video/Image API App
          </a>
        </li>
        <li>
          Day 6
          <a
            href="https://eddie109109.github.io/seventhSelfIntroduction/"
            className="fade-in"
            style={{ color: "#EFD819" }}
          >
            &nbsp;Self-Introduction App
          </a>
        </li>
        <li>
          Day 7
          <a
            href="https://eddie109109.github.io/eightDictionaryApp/"
            className="fade-in"
          >
            &nbsp;Dictionary App
          </a>
        </li>
        <li>
          Day 8
          <a
            href="https://urban-dictionary-audio.herokuapp.com/"
            className="fade-in"
            style={{ color: "#3B823C" }}
          >
            &nbsp;Urban Dictionary with Movie Audio Clip App
          </a>
        </li>
        <li>
          Day 9
          <a
            href="https://eddie109109.github.io/tenthAppRefactoringDaySeven/"
            className="fade-in"
            style={{ color: "#EFD819" }}
          >
            &nbsp;Self-Introduction Refactoring Day 7's work
          </a>
        </li>
        <li>
          Day 10
          <a
            href="https://utube-downloader-app.herokuapp.com/"
            className="fade-in"
            style={{ color: "#3B823C" }}
          >
            &nbsp;Simple Utube downloader App
          </a>
        </li>
        <li>
          Day 11
          <a
            href="https://eddie109109.github.io/twelvethWebAjHairFrontHeading/"
            className="fade-in"
          >
            &nbsp;Created a heading for AJ Hair Studio using CSS grid(side job)
          </a>
        </li>
        <li>
          Day 12
          <a
            href="https://eddie109109.github.io/thirteenFrontLoginRegister/"
            className="fade-in"
          >
            &nbsp;Created frontend stuff (landing/login/register pages) for my
            own social media site using CSS grid
          </a>
        </li>
        <li>
          Day 13
          <a href="https://edsbook-a4ba7.web.app/" className="fade-in">
            &nbsp;Edsbook (prototype) / Connected to a running database / tested
            with an account
          </a>
        </li>
        <li>
          Day 14
          <a
            href="https://google-translate-map.herokuapp.com/"
            className="fade-in"
          >
            &nbsp;Play with Google's map API translate API and Vue.js
          </a>
        </li>
      </ul>
    </div>
  );
}

export default List;
