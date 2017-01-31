import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ApprovalReducer from './approval_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  approval: ApprovalReducer
});

export default RootReducer;
