import React from 'react';
import classes from './orders.module.css'

const order = (props) => {
    const ingredientOutput = Object.keys(props.ingredients).map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig}>{ig}({props.ingredients[ig]})</span>;
    });



    return (
        <div className={classes.order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default order
