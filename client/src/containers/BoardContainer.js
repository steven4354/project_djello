import React, {Component} from "react";
import {connect} from "react-redux";

//custom actions
import {getBoard} from "../actions";

//custom components
import Board from "../components/Board";

class BoardContainer extends Component {
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
  console.log("state.boardReducer.board => ", state.boardReducer.board);
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
