import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Popover from 'react-bootstrap/lib/Popover';
import Modal, { Footer, Header, Title, Body } from 'react-bootstrap/lib/Modal';
import PageHeader from 'react-bootstrap/lib/PageHeader';


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
      view: true,
      edit: false,
      delete: false,
      showModal: false,
    };
    this.handleMacroFormType = this.handleMacroFormType.bind(this);
    this.handleMacroType = this.handleMacroType.bind(this);
  }

  runMacro(option) {
    var test = document.getElementById('form-inline').submit();
    window.alert(33);
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
      case 'M_UD_DR_STEP_ASI_GN':
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
            <input type="search" className="form-control" placeholder="Search...">
            </input>
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
            <input type="search" className="form-control" placeholder="Search...">
            </input>
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
            <input type="search" className="form-control" placeholder="Search...">
            </input>
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
          <Panel header={<span>Driver Schedule Delete</span>} >
          <form className="form-inline">
            <div className="form-group">
              <label for="exampleInputName2">Param 1: </label>
                <input type="text" className="form-control" id="param" placeholder="Run Name">
                </input>
              </div>
              </form>
          </Panel>
        </div> :
        null
      }
      {this.state.M_DL_DR_STEP_RN ?
      <div className="col-lg-10">
        <Panel header={<span>Driver Schedule Update</span>} >
        <form className="form-inline">
          <div className="form-group">
            <label for="exampleInputName2">Param 1: </label>
              <input type="text" className="form-control" id="param" placeholder="Run Name">
              </input>
            </div>
            <div className="form-group">
              <label for="exampleInputName2">Param 2: </label>
                <input type="text" className="form-control" id="param" placeholder="Audit ID">
                </input>
            </div>
            <div className="form-group">
              <label for="exampleInputName2">Param 3: </label>
                <input type="text" className="form-control" id="param" placeholder="Timestamp">
                </input>
              </div>
            </form>
        </Panel>
      </div> :
      null
    }
        {this.state.M_DL_DR_STEP_RN_GN ?
          <div className="col-lg-10">
          <Panel header={<span>Driver Step Delete</span>} >
          <form className="form-inline">
            <div className="form-group">
              <label for="exampleInputName2">Param 1: </label>
                <input type="text" className="form-control" id="param" placeholder="Run Name">
                </input>
                </div>
                <div className="form-group">
                <label for="exampleInputName2">Param 2: </label>
                  <input type="text" className="form-control" id="param" placeholder="Group Number">
                  </input>
                  </div>
                  </form>
                  </Panel>
                  </div> :
                  null
              }
            {this.state.M_DL_DR_STEP_RN_SID ?
    <div className="col-lg-10">
      <Panel header={<span>Driver Step Detail Update</span>} >
      <form className="form-inline">
        <div className="form-group">
          <label for="exampleInputName2">Param 1: </label>
            <input type="text" className="form-control" id="param" placeholder="Run Name">
            </input>
          </div>
          <div className="form-group">
            <label for="exampleInputName2">Param 2: </label>
              <input type="text" className="form-control" id="param" placeholder="Group Number">
              </input>
          </div>
          <div className="form-group">
            <label for="exampleInputName2">Param 3: </label>
              <input type="text" className="form-control" id="param" placeholder="Status">
              </input>
            </div>
          </form>
      </Panel>
    </div> :
    null
  }
  {this.state.M_DL_DR_STEP_DTL_RN ?
  <div className="col-lg-10">
    <Panel header={<span>Driver Step Detail Delete</span>} >
    <form className="form-inline">
      <div className="form-group">
        <label for="exampleInputName2">Param 1: </label>
          <input type="text" className="form-control" id="param" placeholder="Run Name">
          </input>
          </div>
        </form>
    </Panel>
  </div> :
  null
}
{this.state.M_UD_DR_SCHED_STTS_RN_AID ?
<div className="col-lg-10">
  <Panel header={<span>Driver Step Detail Delete</span>} >
  <form className="form-inline">
    <div className="form-group">
      <label for="exampleInputName2">Param 1: </label>
        <input type="text" className="form-control" id="param" placeholder="Run Name">
        </input>
        </div>
      </form>
  </Panel>
</div> :
null
}
{this.state.M_UD_DR_SCHED_VAL_END_RN_AID ?
<div className="col-lg-10">
  <Panel header={<span>Driver Step Detail Delete</span>} >
  <form className="form-inline">
    <div className="form-group">
      <label for="exampleInputName2">Param 1: </label>
        <input type="text" className="form-control" id="param" placeholder="Run Name">
        </input>
        </div>
      </form>
  </Panel>
</div> :
null
}
{this.state.M_UD_DR_SCHED_VAL_START_RN_AID ?
<div className="col-lg-10">
  <Panel header={<span>Driver Step Detail Delete</span>} >
  <form className="form-inline">
    <div className="form-group">
      <label for="exampleInputName2">Param 1: </label>
        <input type="text" className="form-control" id="param" placeholder="Run Name">
        </input>
        </div>
      </form>
  </Panel>
</div> :
null
}
{this.state.M_UD_DR_SCHED_SLA_AID ?
<div className="col-lg-10">
  <Panel header={<span>Driver Step Detail Delete</span>} >
  <form className="form-inline">
    <div className="form-group">
      <label for="exampleInputName2">Param 1: </label>
        <input type="text" className="form-control" id="param" placeholder="Run Name">
        </input>
        </div>
      </form>
  </Panel>
</div> :
null
}
{this.state.M_UD_DR_SCHED_SLA_RN ?
<div className="col-lg-10">
  <Panel header={<span>Driver Step Detail Delete</span>} >
  <form className="form-inline">
    <div className="form-group">
      <label for="exampleInputName2">Param 1: </label>
        <input type="text" className="form-control" id="param" placeholder="Run Name">
        </input>
        </div>
      </form>
  </Panel>
</div> :
null
}
{this.state.M_UD_DR_STEP_DTL_RN_GN ?
<div className="col-lg-10">
  <Panel header={<span>Driver Step Detail Delete</span>} >
  <form className="form-inline">
    <div className="form-group">
      <label for="exampleInputName2">Param 1: </label>
        <input type="text" className="form-control" id="param" placeholder="Run Name">
        </input>
        </div>
      </form>
  </Panel>
</div> :
null
}
{this.state.M_UD_DR_STEP_DTL_RN_STPDTLID ?
<div className="col-lg-10">
  <Panel header={<span>Driver Step Detail Delete</span>} >
  <form className="form-inline">
    <div className="form-group">
      <label for="exampleInputName2">Param 1: </label>
        <input type="text" className="form-control" id="param" placeholder="Run Name">
        </input>
        </div>
      </form>
  </Panel>
</div> :
null
}
{this.state.M_UD_DR_STEP_ASI_SID ?
<div className="col-lg-10">
  <Panel header={<span>Driver Step Detail Delete</span>} >
  <form className="form-inline">
    <div className="form-group">
      <label for="exampleInputName2">Param 1: </label>
        <input type="text" className="form-control" id="param" placeholder="Run Name">
        </input>
        </div>
      </form>
  </Panel>
</div> :
null
}
{this.state.M_UD_DR_STEP_ASI_RN ?
<div className="col-lg-10">
  <Panel header={<span>Driver Step Detail Delete</span>} >
  <form className="form-inline">
    <div className="form-group">
      <label for="exampleInputName2">Param 1: </label>
        <input type="text" className="form-control" id="param" placeholder="Run Name">
        </input>
        </div>
      </form>
  </Panel>
</div> :
null
}
{this.state.M_UD_DR_STEP_ASI_RN_SID ?
<div className="col-lg-10">
  <Panel header={<span>Driver Step Detail Delete</span>} >
  <form className="form-inline">
    <div className="form-group">
      <label for="exampleInputName2">Param 1: </label>
        <input type="text" className="form-control" id="param" placeholder="Run Name">
        </input>
        <label for="exampleInputName2">Param 1: </label>
          <input type="text" className="form-control" id="param" placeholder="Run Name">
          </input>
        </div>
      </form>
  </Panel>
</div> :
null
}
{this.state.M_UD_DR_STEP_ASI_RN_GN ?
<div className="col-lg-10">
  <Panel header={<span>Driver Step Detail Delete</span>} >
  <form className="form-inline">
    <div className="form-group">
      <label for="exampleInputName2">Param 1: </label>
        <input type="text" className="form-control" id="param" placeholder="Run Name">
        </input>
        <label for="exampleInputName2">Param 1: </label>
          <input type="text" className="form-control" id="param" placeholder="Run Name">
          </input>
        </div>
      </form>
  </Panel>
</div> :
null
}
        <div className="col-lg-8 col-lg-offset-4">
          <div className="checkbox">
            <label>
              <input type="checkbox" id="blankCheckbox" value="option1" aria-label="Peer Review"></input>
              Peer Review
            </label>
          </div>
        </div>
        <div className="col-lg-8 col-lg-offset-4">
        <Button className="btn btn-primary" id="submitButton" onClick={() =>{this.runMacro('A')}}>
          Enter
        </Button>
        </div>
      </div>
    );
  }
}

export default DatabaseView;
