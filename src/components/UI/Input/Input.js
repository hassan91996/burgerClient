import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {

    let InputClass = [classes.InputElement]
    if (!props.valid && props.touched) InputClass.push(classes.Invalid)


    let inputElement = null
    switch (props.type) {

        case "input":
            inputElement = <input
                {...props.confg} value={props.value}
                onChange={props.change}
                className={InputClass.join(' ')} />
            break;

        case "select":
            inputElement = <select className={InputClass.join(' ')} value={props.value}
                onChange={props.change} >
                {props.confg.options.map(element => {
                    return <option key={element.value} value={element.value} >{element.display}</option>
                })}
            </select>
            break;
        default: inputElement = <input
            {...props.confg} value={props.value}
            onChange={props.change}
            className={InputClass.join(' ')} />
            break;
    }
    return (
        <div className={classes.Input}>
            {inputElement}
        </div>
    )
}

export default Input
