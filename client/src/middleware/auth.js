import store from '../store';

export const redirectNonUser = (nextState, replace) => {
  const auth = store.getState().authState;

  if (!auth.isAuthenticated) {
    replace({
      pathname: "/login",
    });
  }
};
