import React, {Component} from "react";
import "./Board.css";

class Board extends Component {
  render() {
    return (
      <div id="kaban">
        <div id="scroller">
          <div id="boards">
            <div class="board" id="board1">
              <header>On hold</header>
              <div class="cards" id="b1">
                <div class="card">
                  <span class="cardtitle noselect">A great card #1</span>
                </div>
                <div class="card">
                  <span class="cardtitle noselect">A great card #2</span>
                </div>
                <div class="card">
                  <span class="cardtitle noselect">A great card #3</span>
                </div>
                <div class="card">
                  <span class="cardtitle noselect">A great card #4</span>
                </div>
              </div>
            </div>

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
