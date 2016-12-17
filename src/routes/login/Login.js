/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
// import { Panel, Input, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import { FormControl, Checkbox } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import history from '../../core/history';
import $ from "jquery";
import { sendXHR } from '../../core/util.js';

const title = 'Log In';

function getLoginCheck(email, password, cb) {
  var user = "select user_name from Active_Directory where email = " + "\'" + email + "\'" + ' and pass_word = ' + "\'"+password + "\'";
  sendXHR("POST", "http://localhost:3001/sql_request", user, (xhr) => {
         cb(JSON.parse(xhr.responseText));
    });
}

function sendUserNameToFile(username, cb){
  sendXHR("POST", "http://localhost:3001/writefile", username, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

function submitHandler(e) {
  e.preventDefault();
  var login = $("#login").serializeArray();
  var email = login[0].value;
  var password = login[1].value;
  getLoginCheck(email, password, (results) => {
        var username = results[0].user_name;
        sendUserNameToFile(username, (results) => {
        });
        history.push('/app');
  });
}

function Login(props, context) {
  context.setTitle(title);
  return (
    <div className="col-md-4 col-md-offset-4">
      <div className="text-center">
        <h1 className="login-brand-text">Liberty Dash Login</h1>
      </div>

      <Panel header={<h3>Please Sign In</h3>} className="login-panel">

        <form role="form" id="login" onSubmit={(e) => { submitHandler(e); }}>
          <fieldset>
            <div className="form-group">
              <FormControl
                type="text"
                className="form-control"
                placeholder="Username"
                name="name"
              />
            </div>

            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
              />
            </div>
            <Checkbox label="Remember Me" > Remember Me </Checkbox>
            <Button type="submit" bsSize="large" bsStyle="success" block>Login</Button>
          </fieldset>
        </form>

      </Panel>

    </div>

  );
}


Login.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Login);
