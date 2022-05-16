import React from 'react';
import Burder from '../../components/Burger/Burge'
import {useSelector} from 'react-redux';
import Classes from './Checkout.module.css'
import {Route,Redirect} from 'react-router-dom';
import CheckoutData from './CheckoutData/CheckoutData'
import Button from './../../components/UI/Button/Button'
const Checkout = (props) => {
 
const continueHandler=()=>{
 props.history.replace('/checkout/contactData')
}
const cancelHandler=()=>{
   props.history.goBack();
}
const ingredients = useSelector(state => state.BurgerBuilder.ingredients)

let summery=ingredients?<> <h1>We hope it tastes will!!</h1>
<Burder ingredients={ingredients}/> 
<Button text="CANCEL" type="cancel" click={cancelHandler}/>
<Button text="CONTINUO" type="continuo" click={continueHandler}/></>:<Redirect to="/" />

    return (
        <div className={Classes.Chekout}>
            {summery}
        <Route path={props.match.path+ '/contactData'}  component={CheckoutData}  />
        </div>
    )
}

export default Checkout
