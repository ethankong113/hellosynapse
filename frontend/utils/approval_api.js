import $ from 'jquery';

export const verifyUserAJAX = (mfa, success, error) => {
  $.ajax({
     type: 'POST',
     url: 'api/verify',
     data: mfa,
     success,
     error
   });
};
