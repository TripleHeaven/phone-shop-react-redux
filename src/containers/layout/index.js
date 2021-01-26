import React from 'react';
import {Switch , Route} from 'react-router';

import Phones from '../phones';

import Sidebar from "../../components/sidebar";

const routes = (
  <Switch> 
    <Route path = '/' component = {Phones} exact/>
    </Switch>
)

const Layout = ({children}) => (
  <div className='view-container'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <Sidebar></Sidebar>
        </div>
        <div className='col-md-9'>
        {children}
        </div>
      </div>
    </div>
    </div>
)

export default Layout;