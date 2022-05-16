import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header'
import BuliderBuger from './containers/Burgerbuilder/Burgerbuilder';
import Orders from './containers/orders/orders';
import { Route, Switch } from 'react-router-dom'
import CheckOut from './containers/Checkout/Checkout'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/logout'
import { authCheck } from './store/Actions/index'
import { useDispatch, useSelector } from 'react-redux'



function App() {

  const dispatch = useDispatch()
  const checkauth = () => dispatch(authCheck());


  const IsAuth = useSelector(state => state.auth.token !== null)


  useEffect(() => {
    checkauth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  let routes = (
    <Switch>
      <Route path='/login' component={Auth} />
      <Route path='/' exact component={BuliderBuger} />
    </Switch>
  )

  if (IsAuth) {
    routes = (
      <Switch>
        <Route path='/logout' component={Logout} />
        <Route path='/orders' component={Orders} />
        <Route path='/checkout' component={CheckOut} />
        <Route path='/login' component={Auth} />
        <Route path='/' exact component={BuliderBuger} />
      </Switch>
    )
  }

  return (
    <div className="App">
      <Header Auth={IsAuth} />
      {routes}
    </div>
  );
}


export default App;
