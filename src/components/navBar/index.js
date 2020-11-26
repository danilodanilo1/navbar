import {Nav, Bars, NavBtn, NavBtnLink, NavLink, NavMenu} from './style'

function NavBar() {
  return (
    <>
     <Nav>
       <NavLink to="/" >
        <h1>HOME</h1>
       </NavLink>
       <Bars />
       <NavMenu>
        <NavLink to="/about"  activeStyle>
          ABOUT
        </NavLink>
        <NavLink to="/team" activeStyle>
          TEAM
        </NavLink> 
        <NavLink to="/booking" activeStyle>
          BOOKING
        </NavLink> 
        <NavLink to="/menu" activeStyle>
          MENU
        </NavLink> 
       </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>  
     </Nav>
    </>
  );
}

export default NavBar;