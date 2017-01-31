import { RECEIVE_MFA } from '../actions/session_actions';

const _nullSession = {
  data: {},
  errors: []
};

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_MFA:
      newState.data = action.session;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
