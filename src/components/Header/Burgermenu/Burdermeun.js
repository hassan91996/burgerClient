import React from 'react'
import classes from './Burgermenue.module.css'

const Burdermeun = (props) => {
    return (
        <div className={classes.menu} onClick={props.toggle}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Burdermeun
