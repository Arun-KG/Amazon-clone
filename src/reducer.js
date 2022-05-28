export const initialState = {
  cart: [],
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  // console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
      break;

    case "REMOVE_FROM_BASKET":
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.id) {
          state.cart.splice(i, 1);
          return { ...state };
        }
      }

      return { ...state };
      break;

    default:
      return state;
  }
}

export default reducer;
