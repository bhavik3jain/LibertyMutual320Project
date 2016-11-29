import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';


class Review extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Accept or Reject Peer Review</PageHeader></div></div>
            <Panel header={<span></span>} >
              <div className="row">
                <div className="col-lg-6 col-lg-offset-3">
                  TEST
                </div>
                <div className="col-lg-6 col-lg-offset-3">
                  TEST
                </div>
                <div className="col-lg-6 col-lg-offset-3">
                  TEST
                </div>
                <div className="col-lg-6 col-lg-offset-3">
                  TEST
                </div>
              </div>
            </Panel>
      </div>
        );
  }
}

export default Review;
