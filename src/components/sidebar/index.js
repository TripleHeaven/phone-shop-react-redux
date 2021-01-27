import React from 'react';

import BasketCart from "../basketCart";

import Search from "../search";

const Sidebar= ({children}) => (
  <div>
  <BasketCart></BasketCart>
  <Search></Search>
</div>
)

export default Sidebar;