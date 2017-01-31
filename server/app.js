var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var secrets = require('./utils/secrets');
var bodyParser = require('body-parser');

const SynapsePay = require('synapsepay');
const Clients = SynapsePay.Clients;
const Helpers = SynapsePay.Helpers;
const Users = SynapsePay.Users;

const client = new Clients(
  secrets.id,
  secrets.secret,
  false
);

var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../client')));
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.post('/api/login', urlencodedParser, function(req, res) {
  var username = req.body.username, password = req.body.password;

  var options = {
    _id: '5891021886c27321faae5ca6',
    fingerprint: "b9118e8ac4616622dabb802dc7ef56f1",
    ip_address: Helpers.getUserIP()
  };

 var user;
 Users.get(
  client,
  options,
  function(errResp, userResponse) {
    // error or user object
    user = userResponse;
    const Nodes = SynapsePay.Nodes;

    var nodes;

    const loginPayload = {
      type: 'ACH-US',
      info: {
        bank_id: username,
        bank_pw: password,
        bank_name: 'HelloBank'
      }
    };

    Nodes.create(
      user,
      loginPayload,
      function(nodeError, nodesResponse) {
        // error or array of node objects
        if (nodeError && nodeError.body) {
          const token = nodeError.body.mfa.access_token;
          res.json({token: token, user: user});
        } else if (nodeError) {
          res.json(nodeError);
        } else {
          nodes = nodesResponse;
          res.json(nodes);
        }
      }
    );
  });
});

app.post('/api/verify', urlencodedParser, function(req, res) {

  var options = {
    _id: '5891021886c27321faae5ca6',
    fingerprint: "b9118e8ac4616622dabb802dc7ef56f1",
    ip_address: Helpers.getUserIP()
  };

 var user;
 Users.get(
  client,
  options,
  function(errResp, userResponse) {
    // error or user object
    user = userResponse;
    const mfaPayload = {
      access_token: req.body.token,
      mfa_answer: req.body.answer
    };
    const Nodes = SynapsePay.Nodes;
    Nodes.create(
      user,
      mfaPayload,
      function(err, nodesResponse) {
        if (err) {
          res.json(err);
        } else {
          var nodes = nodesResponse;
          res.json(nodes);
        }
      }
    );
    }
  );
});

app.listen(port, function () {
  console.log('Example app listening on port: ' + port);
});
