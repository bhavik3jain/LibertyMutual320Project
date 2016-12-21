import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Popover from 'react-bootstrap/lib/Popover';
import Modal, { Footer, Header, Title, Body } from 'react-bootstrap/lib/Modal';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';
import { sendXHR } from '../../../core/util.js';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import $ from "jquery";
import history from '../../../core/history';


class Review extends Component {

  constructor(props) {
    super(props);
    this.state = {
      peer_id: history.getCurrentLocation().query.id,
      peer_comment: "",
      sql_call: ""
    };
  }

  submitReview() {
    if($('#accept').is(':checked')){
      this.sendSQLCall((results) => {
      });
      this.updateAccepted((results) => {
      });
      history.push('/app/peerPendingReview');
    }
    if($('#reject').is(':checked')){
      this.updateRejected((results) => {
      });
      history.push('/app/peerPendingReview');
    }
  }

  getPeerReviewComments(cb) {
    sendXHR("POST", "http://localhost:3001/sql_request", 'select PeerReviewComment from PeerReview where PeerReviewID = ' + this.state.peer_id, (xhr) => {
           cb(JSON.parse(xhr.responseText));
      });
  }

  getSQLCall(cb){
    sendXHR("POST", "http://localhost:3001/sql_request", 'select SQL_CALL from PeerReview where PeerReviewID = ' + this.state.peer_id, (xhr) => {
          cb(JSON.parse(xhr.responseText));
      });
  }

  deletePeerReview(cb){
    sendXHR("POST", "http://localhost:3001/sql_request", 'delete from PeerReview where PeerReviewID = ' + this.state.peer_id, (xhr) => {
          cb(JSON.parse(xhr.responseText));
      });
  }

  updateAccepted(cb){
    var state = "Accepted";
    sendXHR("POST", "http://localhost:3001/sql_request", 'update PeerReview set DateReviewed = NOW(), State = ' + "'" + state + "'" + ' where PeerReviewID = ' + this.state.peer_id, (xhr) => {
          cb(JSON.parse(xhr.responseText));
      });
  }

  updateRejected(cb){
    var state = "Rejected";
    sendXHR("POST", "http://localhost:3001/sql_request", 'update PeerReview set DateReviewed = NOW(), State = ' + "'" + state + "'" + ' where PeerReviewID = ' + this.state.peer_id, (xhr) => {
          cb(JSON.parse(xhr.responseText));
      });
  }

  sendSQLCall(cb){
    sendXHR("POST", "http://localhost:3001/sql_request", this.state.sql_call, (xhr) => {
          cb(JSON.parse(xhr.responseText));
      });
  }

  componentDidMount() {
    this.getPeerReviewComments((results) => {
          this.setState({"peer_comment": results[0].PeerReviewComment});
    });

    this.getSQLCall((results) => {
          this.setState({"sql_call": results[0].SQL_CALL});
    });

  }

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
            <label for="review">Query: </label><br/>
            <div className="well well-sm">{this.state.sql_call}</div>
            <label for="comments">Notes:</label><br/>
            <div className="well">{this.state.peer_comment}</div>

          </div>
          <div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
            <span>
              <label className="radio-inline">
                <input type="radio" id="accept" value="accept" name="opt"/>Accept
              </label>
              <label className="radio-inline">
                <input type="radio" id="reject" value="reject" name="opt" />Reject
              </label>
            </span>
          </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-lg-offset-4">
              <Button className="btn btn-default btn-block" onClick={() =>{this.submitReview()}}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
