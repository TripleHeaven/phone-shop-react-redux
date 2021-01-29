import React from 'react';
import { render } from 'react-dom';
import {useSelector} from 'react-redux';
import {connect} from 'react-redux';
import { getTotalBasketPrice, getBasketPhonesWithCount } from '../../selectors';
import * as R from 'ramda';

const Basket = () => {
  const phones = useSelector (state => getBasketPhonesWithCount(state));
  const totalPrice = useSelector (state => getTotalBasketPrice(state));
  const isBasketEmpty = R.isEmpty(phones)
  const renderContent = () => (
    <div>
      {isBasketEmpty && <div>Your shopping cart is is Empty</div>}
      <div className='table-responsive'>
        <table className = 'table-bordered table-striped table-condensed cf'>
          <tbody>
            {phones.map((phone,index) => (
              <tr 
              key = {index}
              className='item-checout'>
                <td className='first-column-checkout'>
                  <img className='img-thumbnail' src={phone.image} alt = {phone.name}/>
                </td>
                <td>{phone.name}</td>
                <td>${phone.price}</td>
                <td>{phone.count}</td>
                <td><span className='delete-cart'></span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {R.not(isBasketEmpty && 
        <div className='row'> 
          <div className='pull-right total-user-checkout'> 
          <b> total</b>
          ${totalPrice}</div>
        </div>)}
    </div>
  )
  const renderSidebar = () => (
    <div>SideBar</div>
  )
  return (
    <div className = "view-container">
      <div className='container'>
        <div className='row'>
          <div className='col-md-9'>
            {renderContent()}
          </div>
          <div className='col-md-3 btn-user-checkout'>
            {renderSidebar()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect()(Basket);