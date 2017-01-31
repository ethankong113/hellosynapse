import { USER_LOGIN, receiveMFA } from '../actions/session_actions';
import { userLoginAJAX } from '../utils/session_api';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const userLoginCB = mfa => {dispatch(receiveMFA(mfa));};
  const errorCB = err => {console.log(err);};
  switch(action.type) {
    case USER_LOGIN:
      userLoginAJAX(action.user, userLoginCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
