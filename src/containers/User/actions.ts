import { AppThunk } from 'store';
import * as t from './actionTypes';

const requestUserProfile = () => ({ type: t.REQUEST_USER_PROFILE });
const receiveUserProfile = (userProfile: UserProfile) => ({ type: t.RECEIVE_USER_PROFILE, userProfile });

export const fetchUserProfile = (): AppThunk => async (dispatch) => {
  dispatch(requestUserProfile());
  const data: UserProfile = { id: '1', name: 'John Smith', age: 30 };
  dispatch(receiveUserProfile(data));
};
