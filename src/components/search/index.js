import React , {useState} from 'react';

import BasketCart from "../basketCart";
import {connect} from "react-redux"
import {useSelector , useDispatch} from "react-redux";

import {searchPhone} from "../../containers/actions/";
const Search=({children}) => { 
  const dispatch = useDispatch();
  const [currentState, setCurrentState]=useState("");

  const handleChange =(event) => {
    setCurrentState(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchPhone(currentState));
  };

return (

  
  <div className='well blosd'>
    <h3 className="lead">Quick shop</h3>
    <div className='input-group'>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input onChange={(event) => handleChange(event)}></input>
      </form>
      <span className = 'input-group-btn'>
        <button className='btn btn-defauldt'>
          <span className="glyphicon glyphicon-search"> </span>
        </button>
      </span>
    </div>
  </div>
)
}
export default connect(null)(Search);