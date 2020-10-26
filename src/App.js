import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import PrivateRoutes
import PrivateRoute from 'Routes/PrivateRoute'

//import pages admin
import Login from 'pages/login'
import ForgotPassword from 'pages/forgotPassword'
import Dashboard from 'pages/dashboard'
import LivestreamList from 'pages/livestream-list'
import MerchantList from 'pages/merchant-list'
import MerchantDetail from 'pages/merchant-detail'
import UserListing from 'pages/user-list'
import Tickets from 'pages/tickets'
import Categories from 'pages/categories'
import Analytic from 'pages/analytic'
import userDetail from 'pages/user-detail'
import NotFound404 from 'pages/404'

//import pages merchant
import LoginMerchant from 'pages/merchant/login'
import ForgotPasswordMerchant from 'pages/merchant/forgotPassword'
import DashboardMerchant from 'pages/merchant/dashboard'
import CreateDashboardMerchant from 'pages/merchant/createDashboard'
import EditDashboardMerchant from 'pages/merchant/editDashboard'
import ProfileMerchant from 'pages/merchant/profile'
import LivestreamDetail from 'pages/merchant/livestreamDetail'
import Notif from 'pages/merchant/notif'
import Support from 'pages/merchant/support'
import ProfileEdit from 'pages/merchant/profileEdit'

//style from tailwindcss
import 'assets/css/main.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/livestream-list" component={LivestreamList} />
        <Route path="/merchant-list"
          render={({ match: { url } }) => (
            <>
              <PrivateRoute path={`${url}/`} component={MerchantList} exact />
              <PrivateRoute path={`${url}/:id`} component={MerchantDetail} />
            </>
          )} />
        <Route path="/user-list"
          render={({ match: { url } }) => (
            <>
              <PrivateRoute path={`${url}/`} component={UserListing} exact />
              <PrivateRoute path={`${url}/:id`} component={userDetail} />
            </>
          )} />
        <PrivateRoute path="/tickets" component={Tickets} />
        <PrivateRoute path="/categories" component={Categories} />
        <PrivateRoute path="/analytic" component={Analytic} />
        <Route exact path="/merchant/login" component={LoginMerchant} />
        <Route path="/merchant/forgot-password" component={ForgotPasswordMerchant} />
        <Route path="/merchant/dashboard"
          render={({ match: { url } }) => (
            <>
              <PrivateRoute path={`${url}/`} component={DashboardMerchant} exact />
              <PrivateRoute path={`${url}/create`} component={CreateDashboardMerchant} />
              <PrivateRoute path={`${url}/edit`} component={EditDashboardMerchant} />
            </>
          )} />
        <Route path="/merchant/profile"
          render={({ match: { url } }) => (
            <>
              <PrivateRoute path={`${url}/`} component={ProfileMerchant} exact />
              <PrivateRoute path={`${url}/edit`} component={ProfileEdit} />
            </>
          )} />
        <Route path="/merchant/livestream"
          render={({ match: { url } }) => (
            <>
              <PrivateRoute path={`${url}/:id`} component={LivestreamDetail} />
            </>
          )} />
        <Route path="/merchant/notification"
          render={({ match: { url } }) => (
            <>
              <PrivateRoute path={`${url}`} component={Notif} exact />
            </>
          )} />
        <Route path="/merchant/support"
          render={({ match: { url } }) => (
            <>
              <PrivateRoute path={`${url}`} component={Support} exact />
            </>
          )} />

        <Route path="*" component={NotFound404} />
      </Switch>
    </Router>
  );
}

export default App;
