import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';


class Review extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Accept or Reject Peer Review</PageHeader>
          </div>
        </div>
        <div className="col-lg-6 col-lg-offset-3">
          <div>
            <label for="review">Parameters</label>
          </div>
          <div>
            <textarea cols="50" rows="5" id="review" readOnly>TEST</textarea>
          </div>
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
            <span>
              <label className="radio-inline">
                <input type="radio" name="optradio"/>Accept
              </label>
              <label className="radio-inline">
                <input type="radio" name="optradio"/>Reject
              </label>
            </span>
          </div>
          </div>
          <div>
            <textarea cols="50" rows="5">Notes</textarea>
          </div>
          <div className="row">
            <div className="col-lg-6 col-lg-offset-4">
            <a href="./peerPendingReview" className="btn btn-info" role="button">Submit</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
