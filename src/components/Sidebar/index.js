import React, { Component } from 'react';
import classNames from 'classnames';
import history from '../../core/history';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accessDatabase: true,
      peerReview: true,
      processes: true,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            <li className="sidebar-search">
              <div className="input-group custom-search-form">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/'); }} >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Home
              </a>
            </li>

            <li className={classNames({ active: !this.state.accessDatabase })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ accessDatabase: !this.state.accessDatabase });
                  return false;
                }}
              >
                <i className="fa fa-bar-chart-o fa-fw" /> &nbsp;Access Database
                <span className="fa arrow" />
              </a>
              <ul
                className={
                  classNames({
                    'nav nav-second-level': true,
                    collapse: this.state.accessDatabase,
                  })
                }
              >
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/databaseView'); }}
                  >
                    View Database
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/databaseEdit'); }}
                  >
                    Edit Database
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/databaseChangelog'); }}
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </li>

            <li className={classNames({ active: !this.state.peerReview })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ peerReview: !this.state.peerReview,
                }); return false;
                }}
              >
                <i className="fa fa-files-o fa-fw" /> Peer Review<span className="fa arrow" />
              </a>

              <ul
                className={classNames({
                  'nav nav-second-level': true,
                  collapse: this.state.peerReview,
                })}
              >
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/peerPendingReview'); }}
                  >
                    Pending Peer Review
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/peerSubmittedReview'); }}
                  >
                    Submitted Peer Review
                  </a>
                </li>
              </ul>
            </li>

            <li className={classNames({ active: !this.state.processes })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ processes: !this.state.processes,
                }); return false;
                }}
              >
                <i className="fa fa-edit fa-fw" /> Processes<span className="fa arrow" />
              </a>

              <ul
                className={classNames({
                  'nav nav-second-level': true,
                  collapse: this.state.processes,
                })}
              >
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/processPending'); }}
                  >
                    Pending
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/proccessHold'); }}
                  >
                    Hold
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/processRunning'); }}
                  >
                    Running
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/processSuccessful'); }}
                  >
                    Successful
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/processFailed'); }}
                  >
                    Failed
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/processSearch'); }}
                  >
                    Search
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
