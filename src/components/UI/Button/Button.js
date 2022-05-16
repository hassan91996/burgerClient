import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    let btnclass=[]
    if(props.type==="continuo")btnclass= [classes.Button,classes.Continuo]
    if(props.type==="cancel") btnclass=[classes.Button,classes.Cancel]
    return (
       <button className={btnclass.join(' ')} onClick={props.click}>{props.text}</button>
     
    )
}

export default Button
