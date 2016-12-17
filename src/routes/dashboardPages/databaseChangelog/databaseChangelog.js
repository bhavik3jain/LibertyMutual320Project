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
      alertVisibleA: true,
      alertVisibleB: true,
      alertVisibleC: true,
      alertVisibleD: true,
      showModal: false,
      change_log: [],
      user_id: ""
    };
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  handleAlertDismiss(option) {
    switch (option) {
      case 'A':
        this.setState({ alertVisibleA: false });
        break;
      case 'B':
        this.setState({ alertVisibleB: false });
        break;
      case 'C':
        this.setState({ alertVisibleC: false });
        break;
      case 'D':
        this.setState({ alertVisibleD: false });
        break;
      default: this.setState({
        alertVisibleA: false,
        alertVisibleB: false,
        alertVisibleC: false,
        alertVisibleD: false,
      });
    }
  }

  getChangeLog(cb) {
    sendXHR("POST", "http://localhost:3001/sql_request", 'select AUDIT_ID from C_DRIVER_SCHEDULE', (xhr) => {
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

    this.getChangeLog((results) => {
          this.setState({"change_log": results});
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
    for(var result in this.state.change_log) {
      ids.push(<tr className="gradeA odd" key={result}><td className="sorting_1">{this.state.change_log[result].AUDIT_ID}</td></tr>);
    }
    return this.state.change_log;
  }

  render() {
    var ids = this.state.change_log;
    console.log(this.state.user_id.user_id);
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
            <TableHeaderColumn dataField='AUDIT_ID' isKey>Audit ID</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>

    );
  }
}

export default DatabaseChangelog;
