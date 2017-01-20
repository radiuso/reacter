import store from '../store';

export const redirectNonUser = (nextState, replace) => {
  const user = store.getState().authState;
  if (user.id === undefined) {
    replace({
      pathname: "/login",
    });
  }
};
