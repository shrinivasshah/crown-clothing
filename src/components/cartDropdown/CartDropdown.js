import "./CartDropdown.scss";
import React from "react";
import CustomButton from "../customButton/customButton";

function CartDropdown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default CartDropdown;
