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
import s from "./react-table.css";
import review from "../review/review"
import history from '../../../core/history';
class SubmittedPeerReview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      peer_review: [],
      user_id: ""
    };
  }

  getPeerReview(cb) {
    sendXHR("POST", "http://localhost:3001/sql_request", 'select * from PeerReview', (xhr) => {
           cb(JSON.parse(xhr.responseText));
      });
  }

  getUserId(cb){
    sendXHR("POST", "http://localhost:3001/readfile", "", (xhr) => {
          console.log("entering XHR");
           cb(JSON.parse(xhr.responseText));
      });
  }

  componentDidMount() {

    this.getPeerReview((results) => {
          this.setState({"peer_review": results});
    });

    this.getUserId((data) => {
          this.setState({"user_id": data});
    });

    $(document).ready(function() {
      $('#dataTables-example').DataTable();
  });

  }


  createTableStructure(){
    var ids = []
    for(var result in this.state.peer_review) {
      break;
      ids.push(<tr className="gradeA odd" key={result}><td className="sorting_1">{this.state.peer_review[result].AUDIT_ID}</td></tr>);
    }
    return this.state.peer_review;
  }


  render() {
    var ids = this.state.peer_review;
    console.log(ids);
    const opts = {
      page: 1,  // which page you want to show as default
      sizePerPageList: [ {
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }, {
        text: 'All', value: ids.length
      } ], // you can change the dropdown list for size per page
      sizePerPage: 10,  // which size per page you want to locate as default
      pageStartIndex: 1, // where to start counting the pages
      paginationSize: 5,  // the pagination bar size.
      prePage: 'Prev', // Previous page button text
      nextPage: 'Next', // Next page button text
      firstPage: 'First', // First page button text
      lastPage: 'Last', // Last page button text
      paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
      onRowClick: function(row) {
        history.push('/app/review');
      }
    };

    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Pending Peer Review</PageHeader>
          </div>
        </div>

        <div>
          <BootstrapTable
            data={ ids }
            pagination={true}
            options={opts}
            id='table1'>
            <TableHeaderColumn dataAlign="center" dataField='PeerReviewID' isKey>Peer Review ID</TableHeaderColumn>
            <TableHeaderColumn dataAlign="center" dataField='MacroInstanceID'>Macro Instance ID</TableHeaderColumn>
            <TableHeaderColumn dataAlign="center" dataField='ReviewerID'>Reviewer ID</TableHeaderColumn>
            <TableHeaderColumn dataAlign="center" dataField='State'>State</TableHeaderColumn>
            <TableHeaderColumn dataAlign="center" dataField='PeerReviewComment'>Peer Review Comment</TableHeaderColumn>
            <TableHeaderColumn dataAlign="center" dataField='DateReviewed'>Date Reviewed</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>

    );
  }
}

export default SubmittedPeerReview;
