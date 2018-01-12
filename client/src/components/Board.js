import React, {Component} from "react";
import "./Board.css";

//other components
import List from "./List";

class Board extends Component {
  // example store data structure
  // boards: [{boardName: "", lists: [{
  //   listName: ""
  //   cards: [{
  //     cardName: ""
  //     ...
  //   }, {
  //     cardName: ""
  //     ...
  //   }]
  // }]},{boardName: "", }]

  render() {
    return (
      <div id="kaban">
        <div id="scroller">
          <div id="boards">
            <List listName="On Hold" />
            <List listName="In Progress" />
            <List listName="Done" />
            <List listName="Ideas" />
            <List listName="Top Mentions :)" />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
