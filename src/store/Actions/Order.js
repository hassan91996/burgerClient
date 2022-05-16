import axios from '../../axios';
import * as actionsTypes from './actionsTypes';


const orderStart = () => {
    return {
        type: actionsTypes.START_ORDER
    }
};
const orderSccess = (orderdata) => {
    return {
        type: actionsTypes.ORDER_SUCCESS,
        data: orderdata
    }
}
const orderFalid = (error) => {
    return {
        type: actionsTypes.ORDER_FAILED,
        error: error
    }
}
export const purchaseOrder = (order) => {
    return dispatch => {
        dispatch(orderStart())
        axios.post('/orders/save', order)
            .then(res => {
                dispatch(orderSccess(res.data))
            })
            .catch(error => {
                dispatch(orderFalid(error))
            })
    }


}

const fetchOrdersStatrs=()=>{
    return{
        type:actionsTypes.FETCH_ORDERS_STARTS
    }
}
const fetchOrdersSuccess=(orders)=>{
    return{
        type:actionsTypes.FETCH_ORDERS_SUCCESS,
        orders:orders
    }
}
const fetchOrdersfailed=(error)=>{
    return{
        type:actionsTypes.FETCH_ORDERS_FAILED,
        error:error
    }
}


export const fetchOrders=()=>{
    return dispatch=>{
        dispatch(fetchOrdersStatrs())
        axios.get("/orders")
        .then(res=>{
            dispatch(fetchOrdersSuccess(res.data))
        })
        .catch(error=>{
            dispatch(fetchOrdersfailed(error))
        })
    }
}