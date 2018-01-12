import React, {Component} from "react";
import "./Board.css";

//other components
import List from "./List";

class Board extends Component {
  render() {
    return (
      <div id="kaban">
        <div id="scroller">
          <div id="boards">
            <List listName="On Hold" />
            <List listName="In Progress" />
            <List listName="Done" />

            <div class="board" id="board2">
              <header>In Progress</header>
              <div class="cards" id="b2">
                <div class="card">
                  <span class="cardtitle">A great card #5</span>
                </div>
              </div>
            </div>

            <div class="board" id="board3">
              <header>Done</header>
              <div class="cards" id="b3">
                <div class="card">
                  <span class="cardtitle noselect">A great card #5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
