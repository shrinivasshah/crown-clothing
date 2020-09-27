import "./CartDropdown.scss";
import React from "react";
import {withRouter} from 'react-router-dom'
import CustomButton from "../customButton/customButton";
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import CartItem from "../cartItem/CartItem";
import {selectCartItems} from '../../redux/cart/cartSelectors'
import {toggleCartHidden} from '../../redux/cart/cartActions'
function CartDropdown({cartItems, history, dispatch}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                { cartItems.length?
                    cartItems.map(cartItem =>(
                        <CartItem key={cartItem.id} item={cartItem} />
                    )):<span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={()=>{
                history.push('/checkout')
                dispatch(toggleCartHidden())
                }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
})


export default withRouter(connect(mapStateToProps)(CartDropdown));
