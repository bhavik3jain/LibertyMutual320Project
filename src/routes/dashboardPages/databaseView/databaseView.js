import React, { Component } from 'react';
import $ from "jquery";
import Panel from 'react-bootstrap/lib/Panel';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Popover from 'react-bootstrap/lib/Popover';
import Modal, { Footer, Header, Title, Body } from 'react-bootstrap/lib/Modal';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import { sendXHR } from '../../../core/util.js';
import s from './dbView.css'


class DatabaseView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      M_DL_DR_SCHED_RN: false,
      M_DL_DR_STEP_RN: false,
      M_DL_DR_STEP_RN_GN: false,
      M_DL_DR_STEP_RN_SID: false,
      M_DL_DR_STEP_DTL_RN: false,
      M_UD_DR_SCHED_STTS_RN_AID : false,
      M_UD_DR_SCHED_VAL_END_RN_AID : false,
      M_UD_DR_SCHED_VAL_START_RN_AID : false,
      M_UD_DR_SCHED_SLA_AID : false,
      M_UD_DR_SCHED_SLA_RN : false,
      M_UD_DR_STEP_DTL_RN_GN : false,
      M_UD_DR_STEP_DTL_RN_STPDTLID : false,
      M_UD_DR_STEP_ASI_SID : false,
      M_UD_DR_STEP_ASI_RN_SID : false,
      M_UD_DR_STEP_ASI_RN_GN : false,
      M_UD_DR_SCHED_START_RN_AID: false,
      //to do//
      M_UD_DR_STEP_ASI_RN: false,
      hiddenTextBox: false,

      view: true,
      edit: false,
      delete: false,
      showModal: false,
    };
    this.handleMacroFormType = this.handleMacroFormType.bind(this);
    this.handleMacroType = this.handleMacroType.bind(this);
  }

  getTrueState(){
    for(var key in this.state){
      if (key.substr(0,2) === "M_"){
        if (this.state[key]){
          return key
        }
      }
    }
  }

  tb(){
    if (document.getElementById('blankCheckbox').checked){
        this.setState({hiddenTextBox: true});
    } else {
        this.setState({hiddenTextBox: false});
    }
  }

  runMacro() {
    var macroName = this.getTrueState();
    var test = $("#" + macroName).serializeArray();
    console.log(test);
    var parameters = [];
    for(var val in test) {
      var value = test[val].value;

      if(isNaN(parseInt(value)) || value.includes("-") || value.includes(":")) {
        value = "\'" + value + "\'";
        parameters.push(value);
      }
      else {
        parameters.push(value);
      }
    }
    var sql_call = 'CALL ' + macroName + "(" + parameters.join(", ") + ")";
    console.log(sql_call);

    if(document.getElementById('blankCheckbox').checked) {
      sendXHR("POST", "http://localhost:3001/sql_request", sql_call, (xhr) => {
        JSON.parse(xhr.responseText);
      });
    }
    else {
      sendXHR("POST", "http://localhost:3001/sql_request", sql_call, (xhr) => {
        JSON.parse(xhr.responseText);
      });
    }
  }

  handleMacroFormType(option) {
    switch (option) {
      case 'M_DL_DR_SCHED_RN':
        this.setState({M_DL_DR_SCHED_RN: true});
        this.setState({M_DL_DR_STEP_RN: false});
        this.setState({M_DL_DR_STEP_RN_GN: false});
        this.setState({M_DL_DR_STEP_RN_SID: false});
        this.setState({M_DL_DR_STEP_DTL_RN: false});
        this.setState({M_UD_DR_SCHED_STTS_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_END_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_START_RN_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_RN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_GN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_STPDTLID: false});
        this.setState({M_UD_DR_STEP_ASI_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN: false});
        this.setState({M_UD_DR_STEP_ASI_RN_GN: false});
        break;
      case 'M_DL_DR_STEP_RN':
        this.setState({M_DL_DR_SCHED_RN: false});
        this.setState({M_DL_DR_STEP_RN: true});
        this.setState({M_DL_DR_STEP_RN_GN: false});
        this.setState({M_DL_DR_STEP_RN_SID: false});
        this.setState({M_DL_DR_STEP_DTL_RN: false});
        this.setState({M_UD_DR_SCHED_STTS_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_END_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_START_RN_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_RN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_GN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_STPDTLID: false});
        this.setState({M_UD_DR_STEP_ASI_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN: false});
        this.setState({M_UD_DR_STEP_ASI_RN_GN: false});
        break;
      case 'M_DL_DR_STEP_RN_GN':
        this.setState({M_DL_DR_SCHED_RN: false});
        this.setState({M_DL_DR_STEP_RN: false});
        this.setState({M_DL_DR_STEP_RN_GN: true});
        this.setState({M_DL_DR_STEP_RN_SID: false});
        this.setState({M_DL_DR_STEP_DTL_RN: false});
        this.setState({M_UD_DR_SCHED_STTS_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_END_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_START_RN_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_RN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_GN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_STPDTLID: false});
        this.setState({M_UD_DR_STEP_ASI_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN: false});
        this.setState({M_UD_DR_STEP_ASI_RN_GN: false});
        break;
      case 'M_DL_DR_STEP_RN_SID':
        this.setState({M_DL_DR_SCHED_RN: false});
        this.setState({M_DL_DR_STEP_RN: false});
        this.setState({M_DL_DR_STEP_RN_GN: false});
        this.setState({M_DL_DR_STEP_RN_SID: true});
        this.setState({M_DL_DR_STEP_DTL_RN: false});
        this.setState({M_UD_DR_SCHED_STTS_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_END_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_START_RN_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_RN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_GN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_STPDTLID: false});
        this.setState({M_UD_DR_STEP_ASI_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN: false});
        this.setState({M_UD_DR_STEP_ASI_RN_GN: false});
        break;
      case 'M_DL_DR_STEP_DTL_RN':
        this.setState({M_DL_DR_SCHED_RN: false});
        this.setState({M_DL_DR_STEP_RN: false});
        this.setState({M_DL_DR_STEP_RN_GN: false});
        this.setState({M_DL_DR_STEP_RN_SID: false});
        this.setState({M_DL_DR_STEP_DTL_RN: true});
        this.setState({M_UD_DR_SCHED_STTS_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_END_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_START_RN_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_RN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_GN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_STPDTLID: false});
        this.setState({M_UD_DR_STEP_ASI_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN: false});
        this.setState({M_UD_DR_STEP_ASI_RN_GN: false});
        break;
      case 'M_UD_DR_SCHED_STTS_RN_AID':
        this.setState({M_DL_DR_SCHED_RN: false});
        this.setState({M_DL_DR_STEP_RN: false});
        this.setState({M_DL_DR_STEP_RN_GN: false});
        this.setState({M_DL_DR_STEP_RN_SID: false});
        this.setState({M_DL_DR_STEP_DTL_RN: false});
        this.setState({M_UD_DR_SCHED_STTS_RN_AID: true});
        this.setState({M_UD_DR_SCHED_VAL_END_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_START_RN_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_RN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_GN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_STPDTLID: false});
        this.setState({M_UD_DR_STEP_ASI_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN: false});
        this.setState({M_UD_DR_STEP_ASI_RN_GN: false});
        break;
      case 'M_UD_DR_SCHED_VAL_END_RN_AID':
        this.setState({M_DL_DR_SCHED_RN: false});
        this.setState({M_DL_DR_STEP_RN: false});
        this.setState({M_DL_DR_STEP_RN_GN: false});
        this.setState({M_DL_DR_STEP_RN_SID: false});
        this.setState({M_DL_DR_STEP_DTL_RN: false});
        this.setState({M_UD_DR_SCHED_STTS_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_END_RN_AID: true});
        this.setState({M_UD_DR_SCHED_VAL_START_RN_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_RN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_GN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_STPDTLID: false});
        this.setState({M_UD_DR_STEP_ASI_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN: false});
        this.setState({M_UD_DR_STEP_ASI_RN_GN: false});
        break;
      case 'M_UD_DR_SCHED_VAL_START_RN_AID':
        this.setState({M_DL_DR_SCHED_RN: false});
        this.setState({M_DL_DR_STEP_RN: false});
        this.setState({M_DL_DR_STEP_RN_GN: false});
        this.setState({M_DL_DR_STEP_RN_SID: false});
        this.setState({M_DL_DR_STEP_DTL_RN: false});
        this.setState({M_UD_DR_SCHED_STTS_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_END_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_START_RN_AID: true});
        this.setState({M_UD_DR_SCHED_SLA_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_RN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_GN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_STPDTLID: false});
        this.setState({M_UD_DR_STEP_ASI_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN: false});
        this.setState({M_UD_DR_STEP_ASI_RN_GN: false});
        break;
      case 'M_UD_DR_SCHED_SLA_AID':
        this.setState({M_DL_DR_SCHED_RN: false});
        this.setState({M_DL_DR_STEP_RN: false});
        this.setState({M_DL_DR_STEP_RN_GN: false});
        this.setState({M_DL_DR_STEP_RN_SID: false});
        this.setState({M_DL_DR_STEP_DTL_RN: false});
        this.setState({M_UD_DR_SCHED_STTS_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_END_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_START_RN_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_AID: true});
        this.setState({M_UD_DR_SCHED_SLA_RN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_GN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_STPDTLID: false});
        this.setState({M_UD_DR_STEP_ASI_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN: false});
        this.setState({M_UD_DR_STEP_ASI_RN_GN: false});
        break;
      case 'M_UD_DR_SCHED_SLA_RN':
        this.setState({M_DL_DR_SCHED_RN: false});
        this.setState({M_DL_DR_STEP_RN: false});
        this.setState({M_DL_DR_STEP_RN_GN: false});
        this.setState({M_DL_DR_STEP_RN_SID: false});
        this.setState({M_DL_DR_STEP_DTL_RN: false});
        this.setState({M_UD_DR_SCHED_STTS_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_END_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_START_RN_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_RN: true});
        this.setState({M_UD_DR_STEP_DTL_RN_GN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_STPDTLID: false});
        this.setState({M_UD_DR_STEP_ASI_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN: false});
        this.setState({M_UD_DR_STEP_ASI_RN_GN: false});
        break;
      case 'M_UD_DR_STEP_DTL_RN_GN':
        this.setState({M_DL_DR_SCHED_RN: false});
        this.setState({M_DL_DR_STEP_RN: false});
        this.setState({M_DL_DR_STEP_RN_GN: false});
        this.setState({M_DL_DR_STEP_RN_SID: false});
        this.setState({M_DL_DR_STEP_DTL_RN: false});
        this.setState({M_UD_DR_SCHED_STTS_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_END_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_START_RN_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_RN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_GN: true});
        this.setState({M_UD_DR_STEP_DTL_RN_STPDTLID: false});
        this.setState({M_UD_DR_STEP_ASI_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN: false});
        this.setState({M_UD_DR_STEP_ASI_RN_GN: false});
        break;
      case 'M_UD_DR_STEP_DTL_RN_STPDTLID':
        this.setState({M_DL_DR_SCHED_RN: false});
        this.setState({M_DL_DR_STEP_RN: false});
        this.setState({M_DL_DR_STEP_RN_GN: false});
        this.setState({M_DL_DR_STEP_RN_SID: false});
        this.setState({M_DL_DR_STEP_DTL_RN: false});
        this.setState({M_UD_DR_SCHED_STTS_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_END_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_START_RN_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_RN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_GN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_STPDTLID: true});
        this.setState({M_UD_DR_STEP_ASI_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN: false});
        this.setState({M_UD_DR_STEP_ASI_RN_GN: false});
        break;
      case 'M_UD_DR_STEP_ASI_SID':
        this.setState({M_DL_DR_SCHED_RN: false});
        this.setState({M_DL_DR_STEP_RN: false});
        this.setState({M_DL_DR_STEP_RN_GN: false});
        this.setState({M_DL_DR_STEP_RN_SID: false});
        this.setState({M_DL_DR_STEP_DTL_RN: false});
        this.setState({M_UD_DR_SCHED_STTS_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_END_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_START_RN_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_RN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_GN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_STPDTLID: false});
        this.setState({M_UD_DR_STEP_ASI_SID: true});
        this.setState({M_UD_DR_STEP_ASI_RN_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN: false});
        this.setState({M_UD_DR_STEP_ASI_RN_GN: false});
        break;
      case 'M_UD_DR_STEP_ASI_RN_SID':
        this.setState({M_DL_DR_SCHED_RN: false});
        this.setState({M_DL_DR_STEP_RN: false});
        this.setState({M_DL_DR_STEP_RN_GN: false});
        this.setState({M_DL_DR_STEP_RN_SID: false});
        this.setState({M_DL_DR_STEP_DTL_RN: false});
        this.setState({M_UD_DR_SCHED_STTS_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_END_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_START_RN_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_RN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_GN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_STPDTLID: false});
        this.setState({M_UD_DR_STEP_ASI_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN_SID: true});
        this.setState({M_UD_DR_STEP_ASI_RN: false});
        this.setState({M_UD_DR_STEP_ASI_RN_GN: false});
        break;
      case 'M_UD_DR_STEP_ASI_RN':
        this.setState({M_DL_DR_SCHED_RN: false});
        this.setState({M_DL_DR_STEP_RN: false});
        this.setState({M_DL_DR_STEP_RN_GN: false});
        this.setState({M_DL_DR_STEP_RN_SID: false});
        this.setState({M_DL_DR_STEP_DTL_RN: false});
        this.setState({M_UD_DR_SCHED_STTS_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_END_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_START_RN_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_RN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_GN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_STPDTLID: false});
        this.setState({M_UD_DR_STEP_ASI_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN: true});
        this.setState({M_UD_DR_STEP_ASI_RN_GN: false});
        break;
      case 'M_UD_DR_STEP_ASI_RN_GN':
        this.setState({M_DL_DR_SCHED_RN: false});
        this.setState({M_DL_DR_STEP_RN: false});
        this.setState({M_DL_DR_STEP_RN_GN: false});
        this.setState({M_DL_DR_STEP_RN_SID: false});
        this.setState({M_DL_DR_STEP_DTL_RN: false});
        this.setState({M_UD_DR_SCHED_STTS_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_END_RN_AID: false});
        this.setState({M_UD_DR_SCHED_VAL_START_RN_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_AID: false});
        this.setState({M_UD_DR_SCHED_SLA_RN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_GN: false});
        this.setState({M_UD_DR_STEP_DTL_RN_STPDTLID: false});
        this.setState({M_UD_DR_STEP_ASI_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN_SID: false});
        this.setState({M_UD_DR_STEP_ASI_RN: false});
        this.setState({M_UD_DR_STEP_ASI_RN_GN: true});
        break;
      default: this.setState({
        M_DL_DR_SCHED_RN: false,
        M_DL_DR_STEP_RN: false,
        M_DL_DR_STEP_RN_GN: false,
        M_DL_DR_STEP_RN_SID: false,
        M_DL_DR_STEP_DTL_RN: false,
        M_UD_DR_SCHED_STTS_RN_AID : false,
        M_UD_DR_SCHED_VAL_END_RN_AID : false,
        M_UD_DR_SCHED_VAL_START_RN_AID : false,
        M_UD_DR_SCHED_SLA_AID : false,
        M_UD_DR_SCHED_SLA_RN : false,
        M_UD_DR_STEP_DTL_RN_GN : false,
        M_UD_DR_STEP_DTL_RN_STPDTLID : false,
        M_UD_DR_STEP_ASI_SID : false,
        M_UD_DR_STEP_ASI_RN_SID : false,
        M_UD_DR_STEP_ASI_RN_GN : false,
      });
    }
  }

  handleMacroType(option){
    switch(option){
        case 'A':
         this.setState({view : true});
         this.setState({edit : false});
         this.setState({delete : false});
         break;

        case 'B':
         this.setState({view : false});
         this.setState({edit : true});
         this.setState({delete : false});
         break;

        case 'C':
          this.setState({view : false});
          this.setState({edit : false});
          this.setState({delete : true});
          break;

      default: this.setState({
        view : true,
        edit : false,
        delete : false,
      });
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Invoke Macro</PageHeader>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ">
            <Panel header={<span>Actions</span>} >
              <Button className="btn btn-default btn-block" onClick={() =>{this.handleMacroType('A')}}>
                View
              </Button>
              <Button className="btn btn-primary btn-block" onClick={() =>{this.handleMacroType('B')}}>
                Edit
              </Button>
              <Button className="btn btn-danger btn-block" onClick={() =>{this.handleMacroType('C')}}>
                Delete
              </Button>
            </Panel>
          </div>
          {this.state.view ?
            <div className="col-lg-6">
              <Panel header={<span>Macros</span>} >
                <input type="search" className="form-control" placeholder="Search..."></input>
                <select multiple className="form-control">
                  <option onClick={() =>{this.handleMacroFormType('A')}}>TBD</option>
                  <option onClick={() =>{this.handleMacroFormType('B')}}>TBD</option>
                  <option onClick={() =>{this.handleMacroFormType('C')}}>TBD</option>
                  <option onClick={() =>{this.handleMacroFormType('D')}}>TBD</option>
                  <option onClick={() =>{this.handleMacroFormType('E')}}>TBD</option>
                </select>
              </Panel>
            </div>:
            null
          }
          {this.state.delete ?
            <div className="col-lg-6">
              <Panel header={<span>Macros</span>} >
              <input type="search" className="form-control" placeholder="Search..."></input>
              <select multiple className="form-control">
                <option onClick={() =>{this.handleMacroFormType('M_DL_DR_SCHED_RN')}}>M_DL_DR_SCHED_RN</option>
                <option onClick={() =>{this.handleMacroFormType('M_DL_DR_STEP_RN')}}>M_DL_DR_STEP_RN</option>
                <option onClick={() =>{this.handleMacroFormType('M_DL_DR_STEP_RN_GN')}}>M_DL_DR_STEP_RN_GN </option>
                <option onClick={() =>{this.handleMacroFormType('M_DL_DR_STEP_RN_SID')}}>M_DL_DR_STEP_RN_SID</option>
                <option onClick={() =>{this.handleMacroFormType('M_DL_DR_STEP_DTL_RN')}}>M_DL_DR_STEP_DTL_RN </option>
              </select>
              </Panel>
            </div>:
            null
          }
          {this.state.edit ?
            <div className="col-lg-6">
              <Panel header={<span>Macros</span>} >
              <input type="search" className="form-control" placeholder="Search..."></input>
              <select multiple className="form-control">
                <option onClick={() =>{this.handleMacroFormType('M_UD_DR_SCHED_STTS_RN_AID')}}>M_UD_DR_SCHED_STTS_RN_AID</option>
                <option onClick={() =>{this.handleMacroFormType('M_UD_DR_SCHED_VAL_END_RN_AID')}}>M_UD_DR_SCHED_VAL_END_RN_AID</option>
                <option onClick={() =>{this.handleMacroFormType('M_UD_DR_SCHED_VAL_START_RN_AID')}}>M_UD_DR_SCHED_VAL_START_RN_AID</option>
                <option onClick={() =>{this.handleMacroFormType('M_UD_DR_SCHED_SLA_AID')}}>M_UD_DR_SCHED_SLA_AID</option>
                <option onClick={() =>{this.handleMacroFormType('M_UD_DR_SCHED_SLA_RN')}}>M_UD_DR_SCHED_SLA_RN</option>
                <option onClick={() =>{this.handleMacroFormType('M_UD_DR_STEP_DTL_RN_GN')}}>M_UD_DR_STEP_DTL_RN_GN</option>
                <option onClick={() =>{this.handleMacroFormType('M_UD_DR_STEP_DTL_RN_STPDTLID')}}>M_UD_DR_STEP_DTL_RN_STPDTLID</option>
                <option onClick={() =>{this.handleMacroFormType('M_UD_DR_STEP_ASI_SID')}}>M_UD_DR_STEP_ASI_SID</option>
                <option onClick={() =>{this.handleMacroFormType('M_UD_DR_STEP_ASI_RN_SID')}}>M_UD_DR_STEP_ASI_RN_SID</option>
                <option onClick={() =>{this.handleMacroFormType('M_UD_DR_STEP_ASI_RN')}}>M_UD_DR_STEP_ASI_RN</option>
                <option onClick={() =>{this.handleMacroFormType('M_UD_DR_STEP_ASI_RN_GN')}}>M_UD_DR_STEP_ASI_RN_GN</option>
              </select>
              </Panel>
            </div>:
            null
          }
        </div>

        {this.state.M_DL_DR_SCHED_RN ?
          <div className="col-lg-10">
            <Panel header={<span>Delete Drive Schedule by Run Name</span>} >
              <form className="form-inline" id="M_DL_DR_SCHED_RN">
                <div className="form-group">
                  <label for="exampleInputName2">Param 1: </label>
                  <input type="text" className="form-control" name="M_DL_DR_SCHED_RN_RUN_NAME" id="M_DL_DR_SCHED_RN_RUN_NAME" placeholder="Run Name"></input>
                </div>
              </form>
            </Panel>
          </div> :
          null
        }
        {this.state.M_DL_DR_STEP_RN ?
          <div className="col-lg-10">
            <Panel header={<span>Delete Driver Step by Run Name</span>} >
            <form className="form-inline" id="M_DL_DR_STEP_RN">
              <div className="form-group">
                <label for="exampleInputName2">Param 1: </label>
                  <input type="text" className="form-control" name="RUN_NAME" id="RUN_NAME" placeholder="Run Name">
                  </input>
                </div>
                </form>
            </Panel>
          </div> :
          null
        }
        {this.state.M_DL_DR_STEP_RN_GN ?
          <div className="col-lg-10">
            <Panel header={<span>Delete Driver Step by Run Name and Group Number</span>} >
              <form className="form-inline" id="M_DL_DR_STEP_RN_GN">
                <div className="form-group">
                  <label for="exampleInputName2">Param 1: </label>
                    <input type="text" className="form-control" name="RUN_NAME" id="RUN_NAME" placeholder="Run Name"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 2: </label>
                    <input type="text" className="form-control" name="GROUP_NUMBER" id="GROUP_NUMBER" placeholder="Group Number"></input>
                </div>
              </form>
            </Panel>
          </div> :
          null
        }
        {this.state.M_DL_DR_STEP_RN_SID ?
          <div className="col-lg-10">
            <Panel header={<span>Delete Driver Step by Run Name and Driver Step ID</span>} >
              <form className="form-inline" id="M_DL_DR_STEP_RN_SID">
                <div className="form-group">
                  <label for="exampleInputName2">Param 1: </label>
                    <input type="text" className="form-control" name="RUN_NAME" id="RUN_NAME" placeholder="Run Name"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 2: </label>
                    <input type="text" className="form-control" name="DRIVER_STEP_ID" id="DRIVER_STEP_ID" placeholder="Driver Step ID"></input>
                </div>
              </form>
            </Panel>
          </div> :
          null
        }
        {this.state.M_DL_DR_STEP_DTL_RN ?
          <div className="col-lg-10">
            <Panel header={<span>Delete Driver Step Detail Entry by Run Name</span>} >
              <form className="form-inline" id="M_DL_DR_STEP_DTL_RN">
                <div className="form-group">
                  <label for="exampleInputName2">Param 1: </label>
                    <input type="text" className="form-control" name="RUN_NAME" id="RUN_NAME" placeholder="Run Name"></input>
                </div>
              </form>
            </Panel>
          </div> :
          null
        }
        {this.state.M_UD_DR_SCHED_STTS_RN_AID ?
          <div className="col-lg-10">
            <Panel header={<span>Update Driver Schedule Status by Run Name and Audit ID</span>} >
              <form className="form-inline" id="M_UD_DR_SCHED_STTS_RN_AID">
                <div className="form-group">
                  <label for="exampleInputName2">Param 1: </label>
                    <input type="text" className="form-control" name="RUN_NAME" id="RUN_NAME" placeholder="Run Name"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 2: </label>
                    <input type="text" className="form-control" name="AUDIT_ID" id="AUDIT_ID" placeholder="Audit ID"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 3: </label>
                    <input type="text" className="form-control" name="STATUS" id="STATUS" placeholder="Status"></input>
                </div>
              </form>
            </Panel>
          </div> :
          null
        }
        {this.state.M_UD_DR_SCHED_VAL_END_RN_AID ?
          <div className="col-lg-10">
            <Panel header={<span>Update Driver Schedule Table Valuation End Date by Run Name and Audit ID</span>} >
              <form className="form-inline" id="M_UD_DR_SCHED_VAL_END_RN_AID">
                <div className="form-group">
                  <label for="exampleInputName2">Param 1: </label>
                    <input type="text" className="form-control" name="RUN_NAME" id="RUN_NAME" placeholder="Run Name"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 2: </label>
                    <input type="text" className="form-control" name="AUDIT_ID" id="AUDIT_ID" placeholder="Audit ID"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 3: </label>
                    <input type="text" className="form-control" name="VAL_END_TIME" id="VAL_END_TIME" placeholder="End Time"></input>
                </div>
              </form>
            </Panel>
          </div> :
          null
        }
        {this.state.M_UD_DR_SCHED_VAL_START_RN_AID ?
          <div className="col-lg-10">
            <Panel header={<span>Update Driver Schedule Table Valuation Start Date by Run Name and Audit ID</span>} >
              <form className="form-inline" id="M_UD_DR_SCHED_VAL_START_RN_AID">
                <div className="form-group">
                  <label for="exampleInputName2">Param 1: </label>
                    <input type="text" className="form-control" name="VAL_START_RUN_NAME" id="VAL_START_RUN_NAME" placeholder="Run Name"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 2: </label>
                    <input type="text" className="form-control" name="AUDIT_ID" id="AUDIT_ID" placeholder="Audit ID"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 3: </label>
                    <input type="text" className="form-control" name="VAL_START_TIME" id="VAL_START_TIME" placeholder="Start Time"></input>
                </div>
              </form>
            </Panel>
          </div> :
          null
        }
        {this.state.M_UD_DR_SCHED_SLA_AID ?
          <div className="col-lg-10">
            <Panel header={<span>Update Driver Schedule SLA Date and Time by Audit ID</span>} >
              <form className="form-inline" id="M_UD_DR_SCHED_SLA_AID">
                <div className="form-group">
                  <label for="exampleInputName2">Param 1: </label>
                    <input type="text" className="form-control" name="SLA_DATE" id="SLA_DATE" placeholder="SLA Date"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 2: </label>
                    <input type="text" className="form-control" name="SLA_TIME" id="SLA_TIME" placeholder="SLA Time"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 3: </label>
                    <input type="text" className="form-control" name="AUDIT_ID" id="AUDIT_ID" placeholder="Audit ID"></input>
                </div>
              </form>
            </Panel>
          </div> :
          null
        }
        {this.state.M_UD_DR_SCHED_SLA_RN ?
          <div className="col-lg-10">
            <Panel header={<span>Update Driver Schedule SLA Date and Time by Run Name</span>} >
              <form className="form-inline" id="M_UD_DR_SCHED_SLA_RN">
                <div className="form-group">
                  <label for="exampleInputName2">Param 1: </label>
                    <input type="text" className="form-control" name="SLA_TIME" id="SLA_TIME" placeholder="SLA Time"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 2: </label>
                    <input type="text" className="form-control" name="RUN_NAME" id="RUN_NAME" placeholder="Run Name"></input>
                </div>
              </form>
            </Panel>
          </div> :
          null
        }
        {this.state.M_UD_DR_STEP_DTL_RN_GN ?
          <div className="col-lg-10">
            <Panel header={<span>Update Driver Step Detail Status by Run Name and Group Number</span>} >
              <form className="form-inline" id="M_UD_DR_STEP_DTL_RN_GN">
                <div className="form-group">
                  <label for="exampleInputName2">Param 1: </label>
                    <input type="text" className="form-control" name="RUN_NAME" id="RUN_NAME" placeholder="Run Name"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 2: </label>
                    <input type="text" className="form-control" name="GROUP_NUMBER" id="GROUP_NUMBER" placeholder="Group Number"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 3: </label>
                    <input type="text" className="form-control" name="STATUS" id="STATUS" placeholder="Status"></input>
                </div>
              </form>
            </Panel>
          </div> :
          null
        }
        {this.state.M_UD_DR_STEP_DTL_RN_STPDTLID ?
          <div className="col-lg-10">
            <Panel header={<span>Update Driver Step Detail Run Status by Run Name and Driver Step Detail ID</span>} >
              <form className="form-inline" id="M_UD_DR_STEP_DTL_RN_STPDTLID">
                <div className="form-group">
                  <label for="exampleInputName2">Param 1: </label>
                    <input type="text" className="form-control" name="RUN_NAME" id="RUN_NAME" placeholder="Run Name"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 2: </label>
                    <input type="text" className="form-control" name="STEP_DETAIL" id="STEP_DETAIL" placeholder="Driver Step Detail ID"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 3: </label>
                    <input type="text" className="form-control" name="STATUS" id="STATUS" placeholder="Status"></input>
                </div>
              </form>
            </Panel>
          </div> :
          null
        }
        {this.state.M_UD_DR_STEP_ASI_SID ?
          <div className="col-lg-10">
            <Panel header={<span>Update Driver Step Table Active Step Indicator by Driver Step ID</span>} >
              <form className="form-inline" id="M_UD_DR_STEP_ASI_SID">
                <div className="form-group">
                  <label for="exampleInputName2">Param 1: </label>
                    <input type="text" className="form-control" name="DRIVER_STEP_ID" id="DRIVER_STEP_ID" placeholder="Driver Step ID"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 2: </label>
                    <input type="text" className="form-control" name="ACTIVE_STEP_INDICATOR" id="ACTIVE_STEP_INDICATOR" placeholder="Active Step Indicator"></input>
                </div>
              </form>
            </Panel>
          </div> :
          null
        }
        {this.state.M_UD_DR_STEP_ASI_RN ?
          <div className="col-lg-10">
            <Panel header={<span>Update Driver Table Active Step Indicator by Run Name</span>} >
              <form className="form-inline" id="M_UD_DR_STEP_ASI_RN">
                <div className="form-group">
                  <label for="exampleInputName2">Param 1: </label>
                    <input type="text" className="form-control" name="RUN_NAME" id="RUN_NAME" placeholder="Run Name"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 2: </label>
                    <input type="text" className="form-control" name="ACTIVE_STEP_INDICATOR" id="ACTIVE_STEP_INDICATOR" placeholder="Active Step Indicator"></input>
                </div>
              </form>
            </Panel>
          </div> :
          null
        }
        {this.state.M_UD_DR_STEP_ASI_RN_SID ?
          <div className="col-lg-10">
            <Panel header={<span>Update Driver Table Active Step Indicator by Run Name and Step ID</span>} >
              <form className="form-inline" id="M_UD_DR_STEP_ASI_RN_SID">
                <div className="form-group">
                  <label for="exampleInputName2">Param 1: </label>
                    <input type="text" className="form-control" name="RUN_NAME" id="RUN_NAME" placeholder="Run Name"></input>
                </div>
                <div>
                  <label for="exampleInputName2">Param 2: </label>
                    <input type="text" className="form-control" name="DRIVER_STEP_ID" id="DRIVER_STEP_ID" placeholder="Driver Step ID"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 3: </label>
                    <input type="text" className="form-control" name="ACTIVE_STEP_INDICATOR" id="ACTIVE_STEP_INDICATOR" placeholder="Active Step Indicator"></input>
                </div>
              </form>
            </Panel>
          </div> :
          null
        }
        {this.state.M_UD_DR_STEP_ASI_RN_GN ?
          <div className="col-lg-10">
            <Panel header={<span>Update Driver Table Active Step Indicator by Run Name and Group Number</span>} >
              <form className="form-inline" id="M_UD_DR_STEP_ASI_RN_GN">
                <div className="form-group">
                  <label for="exampleInputName2">Param 1: </label>
                    <input type="text" className="form-control" name="RUN_NAME" id="RUN_NAME" placeholder="Run Name"></input>
                </div>
                <div>
                  <label for="exampleInputName2">Param 2: </label>
                    <input type="text" className="form-control" name="GROUP_NUMBER" id="GROUP_NUMBER" placeholder="Group Number"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputName2">Param 3: </label>
                    <input type="text" className="form-control" name="ACTIVE_STEP_INDEX" id="ACTIVE_STEP_INDEX" placeholder="Active Step Index"></input>
                </div>
              </form>
            </Panel>
          </div> :
          null
        }
        <div className="col-lg-8 col-lg-offset-4">
          <div className="checkbox">
            <label>
              <input type="checkbox" id="blankCheckbox" value="option1" aria-label="Peer Review" onClick={() =>{this.tb()}}></input>
              Peer Review
            </label>
          </div>
        </div>
        <br/>
        {this.state.hiddenTextBox ?
          <div className="col-lg-10">
            <textarea rows="4" cols="50" placeholder="Enter some comments">
            </textarea>
          </div> :
          null
        }
        <div className="col-lg-8 col-lg-offset-4">
          <Button className="btn btn-primary" id="submitButton" onClick={() =>{this.runMacro()}}>
            Enter
          </Button>
        </div>
      </div>
    );
  }
}

export default DatabaseView;
