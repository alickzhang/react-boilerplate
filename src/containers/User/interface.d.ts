interface UserProfile {
  id: string;
  name: string;
  age: number;
}

interface UserState {
  userProfile?: UserProfile;
  loadingUserProfile: boolean;
}
