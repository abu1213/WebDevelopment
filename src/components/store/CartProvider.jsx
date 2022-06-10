import { useReducer } from "react";
import { CartContext } from "./CartContext";

const defaultCartState = {
  items: [],
  totalamount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalamount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;
    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
        
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;

    } else {
      updatedItem = { ...action.item };
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalamount: updatedTotalAmount,
      
    };
  }
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalamount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;
    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
        
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;

    } else {
      updatedItem = { ...action.item };
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalamount: updatedTotalAmount,
      
    };
  }
  if (action.type === "SUB") {
    const updatedTotalAmount =
      state.totalamount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;
    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
        
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;

    } else {
      updatedItem = { ...action.item };
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalamount: updatedTotalAmount,
      
    };
  }
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemToCart = (id) => {
    dispatchCartAction({ type: "SUB", id: id })
  };

  const cartContext = {
    items: cartState.items,
    totalamount: cartState.totalamount,
    addItem: addItemToCart,
    removeItem: removeItemToCart,
  };
  
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
