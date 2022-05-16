import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Input from '../../../components/UI/Input/Input';
import { checkValidity } from '../../../utilites/checkvalidation'
import classes from './CheckoutData.module.css';
import  * as  actions from '../../../store/Actions/index'

const CheckoutData = (props) => {

    const dispatch=useDispatch();
    const purchaseOrder=(order)=>dispatch(actions.purchaseOrder(order))
    const [formElements, SetFormElements] = useState({
        Name: {
            elementType: "input",
            confg: {
                type: "text",
                placeholder: "YourName"
            },
            value: '',
            touched: false,
            valid: false,
            validation: {
                required: true,
            }
        },
        city: {
            elementType: "input",
            confg: {
                type: "text",
                placeholder: "city"
            },
            value: '',
            touched: false,
            valid: false,
            validation: {
                required: true,
            }
        },
        email: {
            elementType: "input",
            confg: {
                type: "email",
                placeholder: "Email"
            },
            value: '',
            touched: false,
            valid: false,
            validation: {
                isEmail: true,
                required: true
            }
        },
        zipcode: {
            elementType: "input",
            confg: {
                type: "number",
                placeholder: "Zipcode"
            },
            value: '',
            touched: false,
            valid: false,
            validation: {
                required: true,
                minLength: 5,
                isNumeric: true
            }
        },
        deleveryMethod: {
            elementType: "select",
            confg: {
                options: [{
                    value: 1,
                    display: "fast"
                }, {
                    value: 2,
                    display: "normal"
                }]
            },
            value: 1,
            touched: false,
            valid: true,
            validation: {}
        },
    })

    const [formValid, SetFormValid] = useState(false);

    const price = useSelector(state => state.BurgerBuilder.totalPrice);
    const ingredients = useSelector(state => state.BurgerBuilder.ingredients);


    const changeHandler = (e, formElement) => {
        const updatedElement = {
            ...formElements[formElement],
            value: e.target.value,
            valid: checkValidity(e.target.value, formElements[formElement].validation),
            touched: true
        }
        const updatedForm = {
            ...formElements,
            [formElement]: updatedElement
        }
        let formValidator = true;
        for (let formelement in updatedForm) {
            formValidator = updatedForm[formelement].valid && formValidator
        }

        SetFormElements(updatedForm);
        SetFormValid(formValidator)
    }



    let FormComponent = Object.keys(formElements)
        .map(formElement => {
            return <Input
                key={formElement}
                type={formElements[formElement].elementType}
                confg={formElements[formElement].confg}
                value={formElements[formElement].value}
                touched={formElements[formElement].touched}
                valid={formElements[formElement].valid}
                change={e => changeHandler(e, formElement)
                }
            />
        })


    const orderHandler = (e) => {
        e.preventDefault()
        let OrderData = {}
        for (let element in formElements) {
            OrderData[element] = formElements[element].value
        }
        let order = {
            price: price,
            OrderData: OrderData,
            Ingredients: ingredients
        }

        purchaseOrder(order);
         
         props.history.push("/")

    }
    return (
        <div className={classes.Form}>
            <p>Order Data</p>
            <form onSubmit={orderHandler}>
                {FormComponent}
                <button  disabled={!formValid}  >order</button>
            </form>
        </div>

    )
}

export default CheckoutData
