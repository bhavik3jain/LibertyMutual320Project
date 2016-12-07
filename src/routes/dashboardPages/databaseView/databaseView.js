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
      alertVisibleA: true,
      alertVisibleB: true,
      alertVisibleC: true,
      alertVisibleD: false,
      driverScheduleUpdate: false,
      driverScheduleDelete: false,
      driverStepDelete: false,
      driverStepDetailUpdate: false,
      driverStepDetailDelete: false,
      view: true,
      edit: false,
      delete: false,
      showModal: false,
    };
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
  }
  t
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  handleAlertDismiss(option) {
    switch (option) {
      case 'A':
        this.setState({driverScheduleDelete: true});
        this.setState({driverScheduleUpdate: false});
        this.setState({driverStepDelete: false});
        this.setState({driverStepDetailUpdate: false});
        this.setState({driverStepDetailDelete: false});
        break;
      case 'B':
        this.setState({driverScheduleDelete: false});
        this.setState({driverScheduleUpdate: true});
        this.setState({driverStepDelete: false});
        this.setState({driverStepDetailUpdate: false});
        this.setState({driverStepDetailDelete: false});
        break;
      case 'C':
        this.setState({driverScheduleDelete: false});
        this.setState({driverScheduleUpdate: false});
        this.setState({driverStepDelete: true});
        this.setState({driverStepDetailUpdate: false});
        this.setState({driverStepDetailDelete: false});
        break;
      case 'D':
        this.setState({driverScheduleDelete: false});
        this.setState({driverScheduleUpdate: false});
        this.setState({driverStepDelete: false});
        this.setState({driverStepDetailUpdate: true});
        this.setState({driverStepDetailDelete: false});
        break;
      case 'E':
        this.setState({driverScheduleDelete: false});
        this.setState({driverScheduleUpdate: false});
        this.setState({driverStepDelete: false});
        this.setState({driverStepDetailUpdate: false});
        this.setState({driverStepDetailDelete: true});
        break;

      default: this.setState({
        driverScheduleDelete: true,
        driverStepDetailUpdate: false,
        driverStepDelete: false,
        driverScheduleUpdate: false,
        driverScheduleUpdate: false,
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
              <option onClick={() =>{this.handleAlertDismiss('A')}}>Driver Schedule Delete</option>
              <option onClick={() =>{this.handleAlertDismiss('B')}}>Driver Schedule Update</option>
              <option onClick={() =>{this.handleAlertDismiss('C')}}>Driver Step Delete</option>
              <option onClick={() =>{this.handleAlertDismiss('D')}}>Driver Step Detail Update</option>
              <option onClick={() =>{this.handleAlertDismiss('E')}}>Driver Step Detail Delete</option>
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
              <option onClick={() =>{this.handleAlertDismiss('A')}}>Edit Macro 1</option>
              <option onClick={() =>{this.handleAlertDismiss('B')}}>Edit Macro 2</option>
              <option onClick={() =>{this.handleAlertDismiss('C')}}>Edit Macro 3</option>
              <option onClick={() =>{this.handleAlertDismiss('D')}}>Edit Macro 4</option>
              <option onClick={() =>{this.handleAlertDismiss('E')}}>Edit Macro 5</option>
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
              <option onClick={() =>{this.handleAlertDismiss('A')}}>Delete Macro 1</option>
              <option onClick={() =>{this.handleAlertDismiss('B')}}>Delete Macro 2</option>
              <option onClick={() =>{this.handleAlertDismiss('C')}}>Delete Macro 3</option>
              <option onClick={() =>{this.handleAlertDismiss('D')}}>Delete Macro 4</option>
              <option onClick={() =>{this.handleAlertDismiss('E')}}>Delete Macro 5</option>
            </select>
            </Panel>
          </div>:
          null
        }
        </div>

        {this.state.driverScheduleDelete ?
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
      {this.state.driverScheduleUpdate ?
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
        {this.state.driverStepDelete ?
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
            {this.state.driverStepDetailUpdate ?
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
  {this.state.driverStepDetailDelete ?
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
        <div className="col-lg-8 col-lg-offset-4">
          <div className="checkbox">
            <label>
              <input type="checkbox" id="blankCheckbox" value="option1" aria-label="Peer Review"></input>
              Peer Review
            </label>
          </div>
        </div>
        <div className="col-lg-8 col-lg-offset-4">
        <Button className="btn btn-primary" id="submitButton">
          Enter
        </Button>
        </div>
      </div>
    );
  }
}

export default DatabaseView;
