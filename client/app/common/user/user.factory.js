export default () => {
  const user = {};

  const getUser = () => user;

  const isSignedIn = () => user.isSignedIn;

  return { getUser, isSignedIn };
};
