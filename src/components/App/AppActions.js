export const REQUEST_DATA = 'app/REQUEST_DATA';
export const RECEIVE_DATA = 'app/RECEIVE_DATA';

export const initialize = () => dispatch => {
  // initialize the app
  dispatch({ type: REQUEST_DATA });
  // fetch data
  dispatch({ type: RECEIVE_DATA });
};
