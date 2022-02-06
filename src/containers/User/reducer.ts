import * as t from './actionTypes';

const initialState: UserState = {
  loadingUserProfile: false,
};

export const userReducer = (state = initialState, action: t.UserActionTypes): UserState => {
  switch (action.type) {
    case t.REQUEST_USER_PROFILE:
      return { ...state, loadingUserProfile: true };
    case t.RECEIVE_USER_PROFILE:
      return { ...state, loadingUserProfile: false, userProfile: state.userProfile };
    default:
      return state;
  }
};
