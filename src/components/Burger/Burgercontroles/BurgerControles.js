import React from 'react'
import Control from './BurgreControl/control'
import classes from './BurgerControles.module.css'

const BurgerControles = (props) => {
    const controles = Object.keys(props.ingredients).map(ing => {
        return <Control key={ing}
            type={ing}
            enable={props.ingredients[ing] > 0}
            add={() => props.add(ing)}
            remove={() => props.remove(ing)} />
    }
    )

    return (
        <div className={classes.Controles}>
            <p className={classes.Price}>Price : {props.totalPrice.toFixed(2)}</p>
            {controles}
            <button onClick={props.orderd} disabled={props.totalPrice <= 4}
                className={classes.OrderButton}>{props.auth?'ORDER NOW' :'SING UP TO ORDER'}</button>
        </div>
    )
}

export default BurgerControles
