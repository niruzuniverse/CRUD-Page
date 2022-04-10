import React from 'react'
import { Link } from 'react-router-dom';
import {
  
  NavBar,
  NavItem,
  NavBrand,
  Container
} from "reactstrap";
export const Heading = () => {
  return (
   <NavBar color="dark" dark>
      <Container>
        <NavBrand href="/">Shipments</NavBrand>
         <NavItem>
              <Link className="btn btn-primary " to="/add">Add</Link>
            </NavItem>
         </Container>
   </NavBar>
  )
}
