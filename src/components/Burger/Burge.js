import React from 'react'
import BurgerIngredient from './Bugeringradient/Burgeringredient'
import classes from './Burger.module.css'

const Burge = (props) => {
    
    const Ingradients=Object.keys(props.ingredients)
    .map(ingName=>{
        return [...Array(props.ingredients[ingName])].map((_,i)=>{
            return <BurgerIngredient key={ingName+i} type={ingName} />
        })
    }).reduce((arr,el)=>arr.concat(el),[])
    
  const OrderIngradients=Ingradients.length>=1?Ingradients:<h3>Please Add Ingredients</h3>
    return (
        <div  className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {OrderIngradients}
            <BurgerIngredient type='bread-bottom'/>
            
        </div>
    )
}

export default Burge
