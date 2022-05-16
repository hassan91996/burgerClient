import * as actions from '../Actions/actionsTypes'


const intialsatete = {
    orders: null,
    error: null,
    loading: false
}


const StatrOrder = (state, action) => {
    return { ...state, loading: true }
}
const orderSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        error: null
    }
}
const orderFailed = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}


const fetchOrdersStart = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    }
}
const fetchOrdersSuccess = (state, action) => {
    return {
        ...state,
        orders: action.orders,
        loading: false,
        error: null
    }
}
const fetchOrdersFailed = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}




const orderReducer = (state = intialsatete, action) => {

    switch (action.type) {
        case actions.START_ORDER: return StatrOrder(state, action)
        case actions.ORDER_SUCCESS: return orderSuccess(state, action)
        case actions.ORDER_FAILED: return orderFailed(state, action)
        case actions.FETCH_ORDERS_STARTS: return fetchOrdersStart(state, action)
        case actions.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action)
        case actions.FETCH_ORDERS_FAILED: return fetchOrdersFailed(state, action)
        default:
            return state
    }

}
export default orderReducer

