import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Input from '../../components/UI/Input/Input';
import classes from './Auth.module.css'
import { checkValidity } from '../../utilites/checkvalidation'
import { auth } from '../../store/Actions/index'
import Spinner from '../../components/UI/spinner/spinner'



const Auth = () => {

    const [controles, setControles] = useState({
        email: {
            type: 'input',
            confg: {
                type: 'email',
                placeholder: 'enter your Email'
            },
            value: "",
            validation: {
                required: true
            },
            touched: false,
            valid: false
        },
        password: {
            type: 'input',
            confg: {
                type: 'password',
                placeholder: 'enter your password'
            },
            value: "",
            validation: {
                required: true
            },
            touched: false,
            valid: false
        }
    })

    const [isSingup, setSignup] = useState(false);

    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading)
    const error = useSelector(state => state.auth.error)
    const IsAuth = useSelector(state => state.auth.token !== null)
    const buliding = useSelector(state => state.BurgerBuilder.building)
    const authentication = (email, password) => dispatch(auth(email, password, isSingup))
    const switchsinghandler = () => {
        setSignup(!isSingup)
    }


    const [formValid, setFormValid] = useState(false);

    const submitForm = (e) => {
        e.preventDefault()
        authentication(controles.email.value, controles.password.value, isSingup)
    }
    const onchange = (e, element) => {
        let updatedElement = {
            ...controles[element],
            value: e.target.value,
            touched: true,
            valid: checkValidity(e.target.value, controles[element].validation)
        }
        const updatedFrom = {
            ...controles,
            [element]: updatedElement
        }
        let valid = true
        for (let element in updatedFrom) {
            valid = updatedFrom[element].valid && valid
        }

        setControles(updatedFrom)
        setFormValid(valid);

    }
    let formElements = []
    for (let element in controles) {
        formElements.push({
            id: element,
            eleconfig: controles[element]
        })
    }

    let form = formElements.map(element => {
        return <Input key={element.id}
            type={element.eleconfig.type}
            confg={element.eleconfig.confg}
            value={element.eleconfig.value}
            valid={element.eleconfig.valid}
            touched={element.eleconfig.touched}
            change={(e) => onchange(e, element.id)
            }
        />
    })



    let redirect = null;
    if (IsAuth) {
        redirect = buliding ? <Redirect to='/checkout' /> : <Redirect to='/' />
    }
    let renderform = loading ? <Spinner /> :
        <form onSubmit={submitForm}>
            {form}
            <button disabled={!formValid}>submit</button>
        </form>
    return (
        <div className={classes.form}>
            {error}
            {redirect}
            {renderform}
            <button onClick={switchsinghandler} style={{ color: 'red' }} >switch to {isSingup ? 'singup' : "login"}</button>
        </div>
    )
}

export default Auth
