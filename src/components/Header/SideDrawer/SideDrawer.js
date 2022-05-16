import React from 'react'
import BackDrop from '../../../components/UI/Backdrop/Backdrop';
import NavItems from '../NavItems/Navitems'
import classes from './SideDrawer.module.css'

const SideDrawer = (props) => {
    let Dclasses=[classes.SideDrawer,classes.Open]
     if(!props.open) Dclasses=[classes.SideDrawer,classes.Close]
    
    return (
        <>
        <div className={classes.BackDrop}>
           <BackDrop show={props.open} closeModel={props.close} />
           </div>
        <div className={Dclasses.join(' ')} >
            <NavItems Auth={props.Auth}/>
            
        </div>
        </>
    )
}

export default SideDrawer
