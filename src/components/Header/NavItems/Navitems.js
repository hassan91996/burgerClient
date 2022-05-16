import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navitems.module.css'

const Navitems = (props) => {
    return (
        <div className={classes.NavItems}>
            <ul>
                <li><NavLink activeClassName={classes.active}  to="/" exact>BurgerBuilder</NavLink></li>
                {props.Auth ? <li><NavLink  activeClassName={classes.active} to="/orders">Orders</NavLink></li> : null}
                {props.Auth ? <li><NavLink activeClassName={classes.active}  to="/Logout">LogOut</NavLink ></li> : <li><NavLink activeClassName={classes.active}  to="/login">Login</NavLink> </li>}
            </ul>
        </div>
    )
}

export default Navitems


