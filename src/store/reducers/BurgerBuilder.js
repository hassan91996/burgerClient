import * as actionTypes from '../Actions/actionsTypes';


const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false,
    prices: null,
  
};


const setIngredients = (state, action) => {
    let ingredients = {}
    let prices = {}
    for (let ing of action.ings) {
        ingredients[ing.Name] = ing.count
        prices[ing.Name] = ing.price

    }

    return {
        ...state,
        ingredients: ingredients,
        totalPrice: 4,
        error: false,
        prices: prices,
        building: false
    }
}

const fetchIngredientsFailed = (state, action) => {
    return {
        ...state, error: true
    };
};


const addIngredient = (state, action) => {
    let updatedingredient = { [action.ingName]: state.ingredients[action.ingName] + 1 }
    const Updatedingredients = {
        ...state.ingredients,
        ...updatedingredient
    }
    const totalPrice = state.totalPrice + state.prices[action.ingName]
    return {
        ...state,
        ingredients: Updatedingredients,
        totalPrice: totalPrice,
        building:true
    }
}

const removeIngredient = (state, action) => {
    let updatedingredient = { [action.ingName]: state.ingredients[action.ingName] - 1 }
    const Updatedingredients = {
        ...state.ingredients,
        ...updatedingredient
    }
    const totalPrice = state.totalPrice - state.prices[action.ingName]
    return {
        ...state,
        ingredients: Updatedingredients,
        totalPrice: totalPrice
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INGREDIENT: return setIngredients(state, action)
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action)
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action)
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action)
        default: return state

    }


}

export default reducer



