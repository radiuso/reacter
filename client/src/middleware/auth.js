import store from '../store';

export const redirectNonUser = (nextState, replace) => {
  const auth = store.getState().authState;

  if (!auth.isAuthenticated) {
    replace({
      pathname: "/login",
    });
  }
};

export function hasRole(roleRequired) {
  return (nextState, replace) => {
    const auth = store.getState().authState;

    if (!auth.isAuthenticated || auth.user.role !== roleRequired) {
      replace({
        pathname: "/",
      });
    }
  }
}