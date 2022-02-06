export const REQUEST_USER_PROFILE = 'user/REQUEST_USER_PROFILE';
export const RECEIVE_USER_PROFILE = 'user/RECEIVE_USER_PROFILE';

interface RequestUserProfile {
  type: typeof REQUEST_USER_PROFILE;
}

interface ReceiveUserProfile {
  type: typeof RECEIVE_USER_PROFILE;
  userProfile: UserProfile;
}

export type UserActionTypes = RequestUserProfile | ReceiveUserProfile;
