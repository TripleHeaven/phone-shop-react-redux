import React, { useEffect } from "react";
import {connect, useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import  {withRouter} from 'react-router';
import {getCategories} from "../../selectors";
import {compose} from 'redux';
import {getActiveCategoryId} from '../../selectors';
import classNames from 'classnames';
import * as R from 'ramda';


const Categories = (props) => {
  const categories = useSelector(state => getCategories(state));

  
  const activeCategoryId = getActiveCategoryId(props);
  //console.log(activeCategoryId);
  const getActiveState = R.propEq('id', activeCategoryId);
  const renderCategory = (category, index) =>
  { 
    const linkClass = classNames({
      'list-group-item' : true,
      'active' : getActiveState(category),
    });
    return(
      <Link to={`categories/${category.id}`}
      className={linkClass}
      key= {index}>
        {category.name}
      </Link>
    )
  } 
  const renderAllCategory = () => {
    const linkClass = classNames({
      'list-group-item' : true,
      'active' : R.isNil(activeCategoryId),
    })

    return (<Link to="/" className={linkClass}>
      All Categories
    </Link>)
  }
  useEffect(()=> {
    
  },[]);
  return (
    <div className="well">
      <h4>Brand</h4>
      <div className='list-group'>
        {renderAllCategory()}
        {categories.map((category, index) => renderCategory (category,index))}
      </div>
    </div>
  )
}

export default  compose(withRouter,connect())(Categories);


