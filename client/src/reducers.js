import {combineReducers} from "redux";

import * as Actions from "./actions";

//--------------------------------------
//creating the user
//--------------------------------------

const initialUsersState = {
  entities: [],
  isFetching: false,
  error: null
};

export function usersReducer(state = initialUsersState, action) {
  switch (action.type) {
    case Actions.GET_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_SUCCESS:
      return {
        ...state,
        isFetching: false,
        entities: action.data
      };
    case Actions.GET_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

//--------------------------------------
// Grabbing a board
//--------------------------------------

const initialBoardState = {
  board: {},
  boardid: null,
  isFetching: false,
  error: null
};

export function boardReducer(state = initialBoardState, action) {
  switch (action.type) {
    case Actions.GET_BOARD_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_BOARD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        board: action.data,
        boardid: action.data.id
      };
    case Actions.GET_BOARD_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const reducers = combineReducers({
  usersReducer,
  boardReducer
});
