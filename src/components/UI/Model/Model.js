import React from 'react'
import Classes from './Model.module.css';
import BackDrop from '../Backdrop/Backdrop'
const Model = (props) => {
    return (
        <React.Fragment>
         <BackDrop closeModel={props.closeModel} show={props.show}/>
        <div className={Classes.Model}
        style={{transform:props.show? "translateY(0)":"translateY(-100Vh)",
        opacity:props.show? "1":"0"}}>
        {props.children}
        </div>

        </React.Fragment>
    )
}

export default Model
