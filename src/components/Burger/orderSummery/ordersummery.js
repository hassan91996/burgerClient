import React from 'react';
import classes from './ordersummery.module.css'
import Button from '../../UI/Button/Button'


const ordersummery = (props) => {
    const Ingredients = Object.keys(props.Ingredients)
        .map(key => {
            return <li key={key}>{key}: {" "}{props.Ingredients[key]}</li>
        })

    return (
        <div className={classes.OrederSummery}>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {Ingredients}
            </ul>
            <h4>TotalPrice={props.totalPrice.toFixed(2)}</h4>
            <p>Continue to Checkout?</p>
            <Button text="CANCEL" type="cancel" click={props.cancelHandler}/>
            <Button text="CONTINUO" type="continuo" click={props.continuoHandler}/>
          
        </div>
    )
}

export default ordersummery
