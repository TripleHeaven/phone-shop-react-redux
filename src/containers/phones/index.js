import React , { useState, useEffect, Component} from 'react';
import {connect} from 'react-redux';
import { useDispatch, useSelector } from "react-redux";

import {fetchPhones} from "../actions";



// class Phones extends Component {
//   componentDidMount() {
//     this.props.fetchPhones();
//   }

//   render () {
//     return (
//       <div>Phones</div>
//     )
//   }
// }

export default function Phones() {
  //const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(fetchPhones());
  } , []);
  
  return (
    <div>Phones</div>
  );
  
}
