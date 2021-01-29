import React from 'react';
import { render } from 'react-dom';
import {useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import { getTotalBasketPrice, getBasketPhonesWithCount } from '../../selectors';
import * as R from 'ramda';
import {removePhoneFromBasket, cleanBasket, basketCheckout} from '../../containers/actions'
import { Link } from 'react-router-dom';
const Basket = () => {
  const phones = useSelector (state => getBasketPhonesWithCount(state));
  const totalPrice = useSelector (state => getTotalBasketPrice(state));
  const dispatch = useDispatch(); 
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
                <td><span className='delete-cart' onClick={() => dispatch(removePhoneFromBasket(phone.id))}></span></td>
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
    <div ><Link to ="/" className='btn btn-info'>
      <span className='glyphicon glyphicon-info-sign'> </span>
      <span>Continue Shopping!</span>
     </Link>
     {R.not(isBasketEmpty) && 
     <div>
       <button onClick={() => dispatch(cleanBasket())}
       className = 'btn btn-danger'>
         <span className='glyphicon glyphicon-trash'></span>
         Clean cart
       </button>
       <button className='btn btn-succes' onClick={() => dispatch(basketCheckout(phones))}>
          <span className='glyphicon glyphicon-envelope'></span>
          Checkout
       </button>
       </div>}
     </div>
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