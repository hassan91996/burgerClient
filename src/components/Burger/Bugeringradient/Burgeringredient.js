import React from 'react'
import classes from './Burgeringredient.module.css'

const Burger = (props) => {
    let ingredient=null
    switch (props.type) {
        case 'bread-bottom':
          ingredient = <div className={classes.BreadBottom} />;
          break;
        case 'bread-top':
          ingredient = (
            <div className={classes.BreadTop}>
              <div className={classes.Seeds1} />
              <div className={classes.Seeds2} />
            </div>
          );
          break;
        case 'Meat':
          ingredient = <div className={classes.Meat} />;
          break;
        case 'Cheese':
          ingredient = <div className={classes.Cheese} />;
          break;
        case 'Bacon':
          ingredient = <div className={classes.Bacon} />;
          break;
        case 'Salad':
          ingredient = <div className={classes.Salad} />;
          break;
        default:
          ingredient = null;
      }
    
      return ingredient;
    };


export default Burger
