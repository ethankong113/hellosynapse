import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home_page';
import { userLogin } from '../../actions/session_actions';
import { verifyUser } from '../../actions/approval_actions';
import { extractToken, extractUser, extractApproval } from '../../utils/helpers';

const mapStateToProps = (state) => ({
  token: extractToken(state.session),
  user: extractUser(state.session),
  approval: extractApproval(state.approval)
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (user)=>{dispatch(userLogin(user));},
  verifyUser: (token, answer) => {dispatch(verifyUser(token, answer));}
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
