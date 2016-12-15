import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import s from './Home.css';
import StatWidget from '../../components/Widget';
import { sendXHR } from '../../core/util.js'

const title = 'Liberty Dash';
const LMlogo = require('./LMlogo.png');

function Home(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Welcome</PageHeader>
        </div>
      </div>
      <button type="button" className="btn btn-primary" onClick={(e) =>
                {
                  e.preventDefault();
                  console.log("Hi there!");
                  sendXHR("POST", "http://localhost:3001/sql_request", 'select * from C_DRIVER_SCHEDULE', (xhr) => {
                  console.log(JSON.parse(xhr.responseText));
                })}
              }>Click Me</button>
      <img src={LMlogo} alt="LMlogo" height="90%" width="90%"/>

    </div>
  );
}

Home.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
