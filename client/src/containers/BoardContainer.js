import React, {Component} from "react";
import {connect} from "react-redux";

//custom actions
import {getBoard} from "../actions";

//custom components
import Board from "../components/Board";

//imports for dragging functionality
import dragula from "react-dragula";

class BoardContainer extends Component {
  componentDidMount() {
    //grab board data
    this.props._getBoard(1);
  }

  componentDidUpdate() {
    //enabling dragging
    if (
      this.props._board.Lists //means the board obj isn't empty
    ) {
      let sampleListProps = this.props._board.Lists;

      let arrayOfToBeDraggableComponents = [];
      sampleListProps.forEach((list, idx) => {
        console.log("list.name =>", list.name);
        let listDOM = document.getElementById(list.name);
        console.log("listDOM =>", listDOM);
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
    //enabling dragging
  }

  render() {
    return (
      <Board
        _board={this.props._board}
        _getBoard={this.props._getBoard}
        isFetching={this.props.isFetching}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    _board: state.boardReducer.board,
    isFetching: state.boardReducer.isFetching
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _getBoard: id => {
      dispatch(getBoard(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
