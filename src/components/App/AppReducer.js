import { REQUEST_DATA, RECEIVE_DATA } from './AppActions';

const initialState = { loading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, loading: true };
    case RECEIVE_DATA:
      return { ...state, loading: false, data: action.data };
    default:
      return state;
  }
};
