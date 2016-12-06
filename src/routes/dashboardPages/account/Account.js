import React, { Component } from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';


class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Account Settings</PageHeader>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1>Email</h1>
            <input type="radio" name="email" value="off" />
            Turn off email notifications about submitted peer reviews
            <br />
            <input type="radio" name="email" value="on" />
            Turn on email notifications about submitted peer reviews
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1>Peer Review</h1>
            <input type="radio" name="review" value="notRequired" />
            Peer reviews are not required (Admin only)
            <br />
            <input type="radio" name="review" value="required" />
            Peer review is required
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1>Enviroment</h1>
            <input type="radio" name="env" />
            Dev
            <br />
            <input type="radio" name="env" />
            Test
            <br />
            <input type="radio" name="env" />
            QA
            <br />
            <input type="radio" name="env" />
            Prod
          </div>
        </div>
      </div>
    );
  }
}
export default Account;
