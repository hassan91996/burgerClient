import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/Actions/index'
import Burger from '../../components/Burger/Burge'
import BurgerControles from '../../components/Burger/Burgercontroles/BurgerControles'
import classes from './BurgerBuilder.module.css'
import Model from '../../components/UI/Model/Model';
import Oredersummary from '../../components/Burger/orderSummery/ordersummery'
import Spinner from '../../components/UI/spinner/spinner';



const Burgerbuilder = (props) => {

    const [toorder, settoorder] = useState(false);
    const dispatch = useDispatch();
    const ingredients = useSelector(state => state.BurgerBuilder.ingredients)
    const price = useSelector(state => state.BurgerBuilder.totalPrice)
    const error = useSelector(state => state.BurgerBuilder.error)
    const isAuth = useSelector(state => state.auth.token !== null)
    const setIngredients = () => dispatch(actions.initIngredients())
    const addIngredient = ingname => dispatch(actions.addIngredient(ingname))
    const removeIngredient = ingname => dispatch(actions.removeIngredient(ingname))

    useEffect(() => {
        setIngredients()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const order = () => {
        if (!isAuth) {
            props.history.push('/login');
        } else {
            settoorder(true)
        }

    }

    const closeModel = () => {
        settoorder(false)
    }

    const continuoHandler = () => {
        props.history.push('/checkout');
    }

    let ordersummery = null;
    let burger = error ? <p>cant load ingradients</p> : <Spinner />;
    if (ingredients) {
        burger = <> <Burger ingredients={ingredients} />
            <BurgerControles
                ingredients={ingredients}
                auth={isAuth}
                totalPrice={price}
                add={addIngredient}
                remove={removeIngredient}
                orderd={order} /></>
        ordersummery = <Oredersummary Ingredients={ingredients}
            continuoHandler={continuoHandler}
            cancelHandler={closeModel}
            totalPrice={price} />
    }

    return (
        <div className={classes.BuilderBurger}>
            <Model show={toorder} closeModel={closeModel}>
                {ordersummery}
            </Model>
            {burger}
        </div>
    )
}

export default Burgerbuilder
