import React, {Component} from "react";
import "./Board.css";

//other components
import List from "./List";

//imports for dragging functionality
import dragula from "react-dragula";

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

  constructor(props) {
    super();
  }

  componentDidMount() {
    // const {list} = this.props
    let sampleListProps = [
      {listName: "On Hold", cards: []},
      {listName: "In Progress", cards: []},
      {listName: "Done", cards: []},
      {listName: "Ideas", cards: []},
      {listName: "Top Mentions :)", cards: []}
    ];

    let arrayOfToBeDraggableComponents = [];
    sampleListProps.forEach((list, idx) => {
      let listDOM = document.getElementById(list.listName);
      arrayOfToBeDraggableComponents.push(listDOM);
    });

    dragula(arrayOfToBeDraggableComponents).on("drop", function(el) {
      console.log("drop event object =>");
    });
  }

  render() {
    // const {list} = this.props
    let sampleListProps = [
      {listName: "On Hold", cards: []},
      {listName: "In Progress", cards: []},
      {listName: "Done", cards: []},
      {listName: "Ideas", cards: []},
      {listName: "Top Mentions :)", cards: []}
    ];

    //actual component
    return (
      <div id="kaban">
        <div id="scroller">
          <div id="boards">
            {sampleListProps.map(list => {
              return <List listName={list.listName} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
