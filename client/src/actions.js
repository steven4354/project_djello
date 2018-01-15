//--------------------------------------
// Creating a user
//--------------------------------------

export const GET_REQUEST = "GET_REQUEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";

export function getRequest() {
  return {
    type: GET_REQUEST
  };
}

export function getSuccess(data) {
  return {
    type: GET_SUCCESS,
    data: data
  };
}

export function getFailure(error) {
  return {
    type: GET_FAILURE,
    error: error
  };
}

export function createUser() {
  return dispatch => {
    dispatch(getRequest());
    fetch(`https://localhost:3000/api/users/`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response}`);
        }
        return response.json();
      })
      .then(response => {
        console.log("response => ", response);
        dispatch(getSuccess(response));
      })
      .catch(e => {
        dispatch(getFailure(e));
      });
  };
}

//--------------------------------------
// Grabbing a board
//--------------------------------------

export const GET_BOARD_REQUEST = "GET_BOARD_REQUEST";
export const GET_BOARD_SUCCESS = "GET_BOARD_SUCCESS";
export const GET_BOARD_FAILURE = "GET_BOARD_FAILURE";

export function getBoardRequest() {
  return {
    type: GET_BOARD_REQUEST
  };
}

export function getBoardSuccess(data) {
  return {
    type: GET_BOARD_SUCCESS,
    data: data
  };
}

export function getBoardFailure(error) {
  return {
    type: GET_BOARD_FAILURE,
    error: error
  };
}

export function getBoard(id) {
  return dispatch => {
    dispatch(getBoardRequest());
    fetch(`api/boards/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response}`);
        }
        return response.json();
      })
      .then(response => {
        dispatch(getBoardSuccess(response));
      })
      .catch(e => {
        dispatch(getBoardFailure(e));
      });
  };
}
