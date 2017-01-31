import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import ApprovalMiddleware from './approval_middleware';
//import middlewares here and use applyMiddleware as multiple arguments

export default applyMiddleware(SessionMiddleware, ApprovalMiddleware);
