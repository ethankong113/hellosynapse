import $ from 'jquery';

export const userLoginAJAX = (user, success, error) => {
  $.ajax({
     type: 'POST',
     url: 'api/login',
     data: user,
     success,
     error
   });
};
