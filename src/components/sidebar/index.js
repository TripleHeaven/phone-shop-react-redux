import React from 'react';

import BasketCart from "../basketCart";

import Search from "../search";

import Categories from "../categories";

const Sidebar= ({children}) => (
  <div>
  <BasketCart></BasketCart>
  <Search></Search>
  <Categories></Categories>
</div>
)

export default Sidebar;