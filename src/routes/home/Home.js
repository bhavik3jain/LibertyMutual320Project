import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import s from './Home.css';
import StatWidget from '../../components/Widget';

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
