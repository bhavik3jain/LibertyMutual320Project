import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';

class SubmittedPeerReview extends Component {
  render() {
    return (
      <div>

        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Pending Peer Review</PageHeader>
          </div>
        </div>
        <Panel header={<span></span>} >
          <div>
            <div className="dataTable_wrapper">
              <div
                id="dataTables-example_wrapper"
                className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                <div className="row">
                  <div className="col-sm-12">
                    <table
                      className="table table-striped table-bordered table-hover dataTable no-footer"
                      id="dataTables-example"
                      role="grid"
                      aria-describedby="dataTables-example_info"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            className="sorting_asc"
                            tabIndex="0"
                            aria-controls="dataTables-example"
                            rowSpan="1"
                            colSpan="1"
                            style={{ width: 50 }}
                          />
                          <th
                            className="sorting"
                            tabIndex="0"
                            aria-controls="dataTables-example"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Rendering engine: activate to sort column descending"
                            aria-sort="ascending"
                            style={{ width: 265 }}
                          >
                          ID
                          </th>
                          <th
                            className="sorting"
                            tabIndex="0"
                            aria-controls="dataTables-example"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Browser: activate to sort column ascending"
                            style={{ width: 321 }}
                          >
                          Owner Name
                          </th>
                          <th
                            className="sorting"
                            tabIndex="0"
                            aria-controls="dataTables-example"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Platform(s): activate to sort column ascending"
                            style={{ width: 299 }}
                          >
                          Reviewer
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="gradeA odd" role="row">
                          <td><a href="./review">View</a></td>
                          <td className="sorting_1">n</td>
                          <td>Nick W.</td>
                          <td>Gordon A.</td>
                        </tr>
                        <tr className="gradeA even" role="row">
                          <td><a href="./review">View</a></td>
                          <td className="sorting_1">n</td>
                          <td>Nick W.</td>
                          <td>Gordon A.</td>

                        </tr>
                        <tr className="gradeA odd" role="row">
                          <td><a href="./review">View</a></td>
                          <td className="sorting_1">n</td>
                          <td>Nick W.</td>
                          <td>Gordon A.</td>

                        </tr>
                        <tr className="gradeA even" role="row">
                          <td><a href="./review">View</a></td>
                          <td className="sorting_1">n</td>
                          <td>Nick W.</td>
                          <td>Gordon A.</td>

                        </tr>
                        <tr className="gradeA odd" role="row">
                          <td><a href="./review">View</a></td>
                          <td className="sorting_1">n</td>
                          <td>Nick W.</td>
                          <td>Gordon A.</td>

                        </tr>
                        <tr className="gradeA even" role="row">
                          <td><a href="./review">View</a></td>
                          <td className="sorting_1">n</td>
                          <td>Nick W.</td>
                          <td>Gordon A.</td>

                        </tr>
                        <tr className="gradeA odd" role="row">
                          <td><a href="./review">View</a></td>
                          <td className="sorting_1">n</td>
                          <td>Nick W.</td>
                          <td>Gordon A.</td>

                        </tr>
                        <tr className="gradeA even" role="row">
                          <td><a href="./review">View</a></td>
                          <td className="sorting_1">n</td>
                          <td>Nick W.</td>
                          <td>Gordon A.</td>

                        </tr>
                        <tr className="gradeA odd" role="row">
                          <td><a href="./review">View</a></td>
                          <td className="sorting_1">n</td>
                          <td>Nick W.</td>
                          <td>Gordon A.</td>

                        </tr>
                        <tr className="gradeA even" role="row">
                          <td><a href="./review">View</a></td>
                          <td className="sorting_1">n</td>
                          <td>Nick W.</td>
                          <td>Gordon A.</td>

                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    );
  }
}

export default SubmittedPeerReview;
