import * as actionsTypes from './types';

export const setUser = user => {
  return {
    type: actionsTypes.SET_USER,
    payload: {
      currentUser: user
    }
  };
};