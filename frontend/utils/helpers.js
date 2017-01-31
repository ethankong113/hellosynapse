import _ from 'lodash';

export const extractToken = session => {
  if (_.isEmpty(session) || _.isEmpty(session.data)) {
    return "";
  }
  return session.data.token;
};

export const extractUser = session => {
  if (_.isEmpty(session) || _.isEmpty(session.data)) {
    return null;
  }
  console.log(session.data.user);
  return session.data.user;
};

export const extractApproval = approval => {
  if (_.isEmpty(approval)) {
    return false;
  }
  return approval.status;
};
