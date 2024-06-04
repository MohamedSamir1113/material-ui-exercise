import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const Nav = styled.ul`
        background-color: black;
        color: white;
        display: flex;
        justify-content: space-evenly;
    `;
    
  return (
    <Nav>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contacts">Contacts</Link></li>
      
    </Nav>
  );
}

export default Navbar;
