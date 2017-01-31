import { VERIFY_USER, receiveApproval } from '../actions/approval_actions';
import {  verifyUserAJAX } from '../utils/approval_api';

const ApprovalMiddleware = ({getState, dispatch}) => next => action => {
  const verifyUserCB = approval => {dispatch(receiveApproval(approval));};
  const errorCB = err => {console.log(err);};
  switch(action.type) {
    case VERIFY_USER:
      verifyUserAJAX(action.mfa, verifyUserCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default ApprovalMiddleware;
