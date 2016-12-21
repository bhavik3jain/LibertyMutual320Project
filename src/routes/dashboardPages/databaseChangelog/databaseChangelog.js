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

import s from "./react-table.css"

class DatabaseChangelog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      change_log: [],
      user_id: ""
    };
  }

  getChangeLog(cb) {
    sendXHR("POST", "http://localhost:3001/sql_request", 'select * from CHANGE_LOG', (xhr) => {
           cb(JSON.parse(xhr.responseText));
      });
  }


  componentDidMount() {

    this.getChangeLog((results) => {
          this.setState({"change_log": results});
          console.log(this.state.change_log);
    });

    $(document).ready(function() {
      $('#dataTables-example').DataTable();
    });

  }

  createTableStructure(){
    var ids = []
    for(var result in this.state.change_log) {
      ids.push(<tr className="gradeA odd" key={result}><td className="sorting_1">{this.state.change_log[result].AUDIT_ID}</td></tr>);
    }
    return this.state.change_log;
  }

  render() {
    var ids = this.state.change_log;
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
      paginationShowsTotal: this.renderShowsTotal  // Accept bool or function
      // hideSizePerPage: true > You can hide the dropdown for sizePerPage
    };
    // console.log(ids);
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Changelog</PageHeader>
          </div>
        </div>

        <div>
          <BootstrapTable
            data={ ids }
            pagination={true}
            options={opts}>
            <TableHeaderColumn dataField='ID' isKey>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='DATE_TIME'>Date Changed</TableHeaderColumn>
            <TableHeaderColumn dataField='Owner'>Owner</TableHeaderColumn>
            <TableHeaderColumn dataField='MacroName'>Macro Name</TableHeaderColumn>
            <TableHeaderColumn dataField='Parameters'>Parameters</TableHeaderColumn>
            <TableHeaderColumn dataField='PeerReviewedBy'>Peer Reviewer</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>

    );
  }
}

export default DatabaseChangelog;
