/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import App from '../components/App';

// Child routes
import home from './home';
import login from './login';
import table from './dashboardPages/extras/tables';
import button from './dashboardPages/extras/buttons';
import flotcharts from './dashboardPages/extras/flotCharts';
import forms from './dashboardPages/extras/forms';
import grid from './dashboardPages/extras/grid';
import icons from './dashboardPages/extras/icons';
import morrisjscharts from './dashboardPages/extras/morrisjsCharts';
import notification from './dashboardPages/extras/notification';
import panelwells from './dashboardPages/extras/panelWells';
import typography from './dashboardPages/extras/typography';
import blank from './dashboardPages/extras/blank';
import error from './error';
// added new routes
import databaseView from './dashboardPages/databaseView';
import databaseEdit from './dashboardPages/databaseEdit';
import databaseChangelog from './dashboardPages/databaseChangelog';
import peerPendingReview from './dashboardPages/peerPendingReview';
import peerSubmittedReview from './dashboardPages/peerSubmittedReview';
import processPending from './dashboardPages/processPending';
import processHold from './dashboardPages/processHold';
import processRunning from './dashboardPages/processRunning';
import processSuccessful from './dashboardPages/processSuccessful';
import processFailed from './dashboardPages/processFailed';
import processSearch from './dashboardPages/processSearch';

import Header from '../components/Header';

export default [

  {
    path: '/login',
    children: [
      login,
    ],
    async action({ next, render, context }) {
      const component = await next();
      if (component === undefined) return component;
      return render(
        <App context={context}>{component}</App>
      );
    },
  },


  {
    path: '/',

  // keep in mind, routes are evaluated in order
    children: [
      home,
      // contact,
      databaseView,
      databaseEdit,
      databaseChangelog,
      peerPendingReview,
      peerSubmittedReview,
      processPending,
      processHold,
      processRunning,
      processSuccessful,
      processFailed,
      processSearch,

      // extras
      table,
      button,
      flotcharts,
      forms,
      grid,
      icons,
      morrisjscharts,
      notification,
      panelwells,
      typography,
      // register,
      blank,

      // place new routes before...
      // content,
      error,
    ],

    async action({ next, render, context }) {
      // console.log('inside dashboard');
      const component = await next();
      // console.log('inside dasdboard component', component);
      if (component === undefined) return component;
      return render(
        <div>
          <Header />
          <div id="page-wrapper" className="page-wrapper">
            <App context={context}>{component}</App>
          </div>
        </div>
      );
    },
  },
  {
    path: '/error',
    children: [
      error,
    ],
    async action({ next, render, context }) {
      // console.log('inside error');
      const component = await next();
      // console.log('inside error with component', component);
      if (component === undefined) return component;
      return render(
        <App context={context}>{component}</App>
      );
    },
  },
];
