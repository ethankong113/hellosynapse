export const USER_LOGIN = 'USER_LOGIN';
export const RECEIVE_MFA = 'RECEIVE_MFA';

export const userLogin = user => ({
  user,
  type: USER_LOGIN
});

export const receiveMFA = session => ({
  session,
  type: RECEIVE_MFA
});
