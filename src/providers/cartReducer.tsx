
const addToCart = (state: any, action: any) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === action.payload.id
    );
    if (updatedItemIndex < 0) {
      updatedCart.push({ ...action.payload, qty: 1 });
    } else {
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      updatedItem.qty++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    return {
      ...state,
      cart: updatedCart,
      total: state.total + action.payload.offPrice,
    };
}


const CartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToCart(state, action);
    default:
      return state;
  }
};

export default CartReducer;
