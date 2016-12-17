import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  ProgressBar,
} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import history from '../../core/history';
import $ from "jquery";
import Sidebar from '../Sidebar';

const logo = require('./logo.png');

function Header() {
  return (
    <div id="wrapper" className="content">
      <Navbar fluid={true}  style={ {margin: 0} }>
          <Brand>
            <span>
              <img src={logo} alt="Start React" title="Start React" />
              <span>&nbsp;Liberty Dash </span>
            </span>
          </Brand>
          <ul className="nav navbar-top-links navbar-right">
            <NavDropdown title={<i className="fa fa-user fa-fw"></i> } id = 'navDropdown4'>
              <MenuItem eventKey = "1" onClick = {(event) => { history.push('/app/account');}}>
                <span> <i className="fa fa-user fa-fw"></i> User Profile </span>
              </MenuItem>
              <MenuItem divider />
                <MenuItem eventKey = "2" onClick = {(event) => { history.push('/');}}>
                  <span> <i className = "fa fa-sign-out fa-fw" /> Logout </span>
                </MenuItem>
              </NavDropdown>
          </ul>
        <Sidebar />
      </Navbar>
    </div>
  );
}
function toggleMenu(){
    if($(".navbar-collapse").hasClass('collapse')){
      $(".navbar-collapse").removeClass('collapse');
    }
    else{
      $(".navbar-collapse").addClass('collapse');
    }
  }

export default Header;
