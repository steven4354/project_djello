import React, {Component} from "react";
import "./Board.css";

//other components
import List from "./List";

class Board extends Component {
  constructor(props) {
    super();
  }

  render() {
    let {isFetching} = this.props;
    let lists = this.props._board.Lists;

    //actual component
    return (
      <div>
        {!isFetching && lists ? (
          <div id="kaban">
            <div id="scroller">
              <div id="boards">
                {lists.map(list => {
                  return (
                    <List
                      listName={list.name}
                      cards={list.Cards}
                      databaseListId={list.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default Board;

//add this back for the draggable
/*
componentDidMount() {
  // const {list} = this.props
  let sampleListProps = [
    {databaseId: 1, listName: "On Hold", cards: []},
    {databaseId: 2, listName: "In Progress", cards: []},
    {databaseId: 3, listName: "Done", cards: []},
    {databaseId: 4, listName: "Ideas", cards: []},
    {databaseId: 5, listName: "Top Mentions :)", cards: []}
  ];

  let arrayOfToBeDraggableComponents = [];
  sampleListProps.forEach((list, idx) => {
    let listDOM = document.getElementById(list.listName);
    arrayOfToBeDraggableComponents.push(listDOM);
  });

  dragula(arrayOfToBeDraggableComponents)
    .on("drag", function(el) {
      console.log("drag event object =>", el);
    })
    .on("drop", function(el) {
      console.log("drop event object =>", el);
    })
    .on("over", function(el, container) {
      //use this on to
      //update the database when
      //a card is dragged
      //to trigger
      //assign each card a listId
      //and if it's over mathces card's listID -> meaning its the first drag over
      //then no change yet
      //but when not equal that menas its dragged
      //and dropped then update the card's listId
      //and dispatch action to api to update it as well
      console.log("over event el =>", el);

      console.log("over event container =>", container);
    });
}
*/
