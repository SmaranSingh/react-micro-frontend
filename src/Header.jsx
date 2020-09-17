import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <div className='center-column'>
      <h1>Header</h1>
    </div>
    <nav>
      <ol className='center-column'>
        <li>
          <NavLink to='/'>Parent</NavLink>
        </li>
        <li>
          <NavLink to='/child1'>Child1</NavLink>
        </li>
        <li>
          <NavLink to='/child2'>Child2</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default Header;
