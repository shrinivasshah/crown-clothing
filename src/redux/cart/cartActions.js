import { cartActionTypes } from "./cartTypes";

export const toggleCartHidden = () => {
    return { type: cartActionTypes.TOGGLE_CART_HIDDEN };
};

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item,
});

export const clearItemFromCart = (payload) => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload,
});

export const removeItem = (payload) => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload,
});
