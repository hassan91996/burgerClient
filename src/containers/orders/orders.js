import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../../store/Actions/Order'
import Order from '../../components/orders/order'
import classes from './orders.module.css'
import Spinner from '../../components/UI/spinner/spinner'



const Orders = () => {

    const dispatch = useDispatch()

    const Orders = useSelector(state => state.order.orders)
    const loading = useSelector(state => state.order.loading)
    const getorders = () => dispatch(fetchOrders())

    useEffect(() => {
        getorders()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    let orders = loading ? <Spinner /> : null;

    if (Orders) {
        orders = Orders.map(order => {
            return <Order
                key={order._id}
                ingredients={order.Ingredients}
                price={order.price} />
        })
    }
    return (
        <div className={classes.orders}>

            {orders}
        </div>
    )
}

export default Orders
