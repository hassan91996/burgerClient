import React, { useState } from 'react'
import Logo from './Logo/Logo'
import Classes from './Header.module.css';
import Navitems from './NavItems/Navitems'
import Menu from './Burgermenu/Burdermeun';
import SideDrawer from '../Header/SideDrawer/SideDrawer'


const Header = (props) => {

  const [SideDrawervisible, setSideDrawervisible] = useState(false)

  const closeSideDreawer = () => {
    setSideDrawervisible(false)
  }
  const toggle = () => {
    setSideDrawervisible(!SideDrawervisible);
  }
  return (
    <div className={Classes.Header}>
      <Logo />
      <Menu toggle={toggle} />
      <SideDrawer
        Auth={props.Auth}
        open={SideDrawervisible}
        close={closeSideDreawer} />
      <div className={Classes.DeskTop}>
        <Navitems Auth={props.Auth} />
      </div>

    </div>

  )
}

export default Header









