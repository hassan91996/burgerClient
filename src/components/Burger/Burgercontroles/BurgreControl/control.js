import React from 'react'
import classes from './control.module.css'

const control = (props) => {
 
    return (
        <div className={classes.control}>
           <div className={classes.Lable}>{props.type}</div>
            <button onClick={props.remove} disabled={!props.enable}>Less</button>
            <button onClick={props.add}>More</button>
        </div>
    )
}

export default control
