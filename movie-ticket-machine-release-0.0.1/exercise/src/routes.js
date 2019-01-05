import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';
import showdetailGhostland from './views/component/showdetailGhostland';
import showdetailDeadpool from './views/component/showdetailDeadpool';
import showdetailthaiban from './views/component/showdetailthaiban';
import showdetailAvengers from './views/component/showdetailAvengers';
import showdetailJazz from './views/component/showdetailJazz';
import showdetailMidnight from './views/component/showdetailMidnight';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', name: 'Home', component: DefaultLayout, exact: true },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/showdetailGhostland',name: 'showGhostland', component: showdetailGhostland},
  { path: '/showdetailDeadpool',name: 'showDeadpool', component: showdetailDeadpool},
  { path: '/showdetailthaiban',name: 'showThaiban', component: showdetailthaiban},
  { path: '/showdetailAvengers', name: 'showavengers', component: showdetailAvengers},
  { path: '/showdetailJazz',name: 'showjazz', component: showdetailJazz},
  { path: '/showdetailMidnight',name: 'showmidnight', component: showdetailMidnight},
];

export default routes;
