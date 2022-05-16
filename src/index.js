import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import BurgerBuilderReduer from './store/reducers/BurgerBuilder';
import OrdersReducer from './store/reducers/order';
import AuthReducer from './store/reducers/auth';
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';


const rootReducer = combineReducers({
  BurgerBuilder: BurgerBuilderReduer,
  order: OrdersReducer,
  auth: AuthReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>

  </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
