export const VERIFY_USER = 'VERIFY_USER';
export const RECEIVE_APPROVAL = 'RECEIVE_APPROVAL';

export const verifyUser = mfa => ({
  mfa,
  type: VERIFY_USER
});

export const receiveApproval = approval => ({
  approval,
  type: RECEIVE_APPROVAL
});
