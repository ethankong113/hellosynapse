import { RECEIVE_APPROVAL } from '../actions/approval_actions';

const _nullApproval = {
  status: false,
  errors: []
};

const ApprovalReducer = (state = _nullApproval, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_APPROVAL:
      newState.status = action.status;
      return newState;
    default:
      return state;
  }
};

export default ApprovalReducer;
