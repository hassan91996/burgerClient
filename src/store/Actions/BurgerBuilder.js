import * as actionTypes from './actionsTypes' ;
import axios from '../../axios' 

export const addIngredient =(name)=>{
  return{
      type:actionTypes.ADD_INGREDIENT,
      ingName:name
  }
}

export const removeIngredient =(name)=>{
  return{
      type:actionTypes.REMOVE_INGREDIENT,
      ingName:name
  }
}

export const setIngredients=(ings)=>{
  return{
    type:actionTypes.SET_INGREDIENT,
    ings:ings
  }
}
export const fetchIngredientsFailed=()=>{
  return{
    type:actionTypes.FETCH_INGREDIENTS_FAILED
  }
}

export const  initIngredients=()=>{
return dispath=> { axios.get('/ingredients/getIngredients')
  .then(res=> { 
    dispath(setIngredients(res.data))
  })
  .catch(err=>{
    dispath(fetchIngredientsFailed())
  })}
}

