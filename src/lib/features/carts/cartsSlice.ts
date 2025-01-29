import { compareArrays } from "@/lib/utils";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const calcAdjustedTotalPrice = (
  totalPrice: number,
  data: CartItem,
  quantity?: number
): number => {
  return data.price * (quantity ? quantity : data.quantity);
};

export type CartItem = {
  id: number;
  name: string;
  srcUrl: string;
  price: number;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  totalQuantities: number;
};

interface CartsState {
  cart: Cart | null;
  totalPrice: number;
  adjustedTotalPrice: number;
  action: "update" | "add" | "delete" | null;
}

const initialState: CartsState = {
  cart: null,
  totalPrice: 0,
  adjustedTotalPrice: 0,
  action: null,
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // if cart is empty, initialize it
      if (state.cart === null) {
        state.cart = {
          items: [action.payload],
          totalQuantities: action.payload.quantity,
        };
        state.totalPrice = state.totalPrice + action.payload.price * action.payload.quantity;
        state.adjustedTotalPrice = state.adjustedTotalPrice + calcAdjustedTotalPrice(state.totalPrice, action.payload);
        return;
      }

      // check if item is already in the cart
      const isItemInCart = state.cart.items.find((item) => item.id === action.payload.id);

      if (isItemInCart) {
        state.cart = {
          ...state.cart,
          items: state.cart.items.map((eachCartItem) => {
            if (eachCartItem.id === action.payload.id) {
              return {
                ...eachCartItem,
                quantity: action.payload.quantity + eachCartItem.quantity,
              };
            }
            return eachCartItem;
          }),
          totalQuantities: state.cart.totalQuantities + action.payload.quantity,
        };
        state.totalPrice = state.totalPrice + action.payload.price * action.payload.quantity;
        state.adjustedTotalPrice = state.adjustedTotalPrice + calcAdjustedTotalPrice(state.totalPrice, action.payload);
        return;
      }

      // if item is not in the cart, add it
      state.cart = {
        ...state.cart,
        items: [...state.cart.items, action.payload],
        totalQuantities: state.cart.totalQuantities + action.payload.quantity,
      };
      state.totalPrice = state.totalPrice + action.payload.price * action.payload.quantity;
      state.adjustedTotalPrice = state.adjustedTotalPrice + calcAdjustedTotalPrice(state.totalPrice, action.payload);
    },
    removeCartItem: (state, action: PayloadAction<{ id: number }>) => {
      if (state.cart === null) return;

      const isItemInCart = state.cart.items.find((item) => item.id === action.payload.id);

      if (isItemInCart) {
        state.cart = {
          ...state.cart,
          items: state.cart.items
            .map((eachCartItem) => {
              if (eachCartItem.id === action.payload.id) {
                return {
                  ...eachCartItem,
                  quantity: eachCartItem.quantity - 1,
                };
              }
              return eachCartItem;
            })
            .filter((item) => item.quantity > 0),
          totalQuantities: state.cart.totalQuantities - 1,
        };

        state.totalPrice = state.totalPrice - isItemInCart.price * 1;
        state.adjustedTotalPrice = state.adjustedTotalPrice - calcAdjustedTotalPrice(isItemInCart.price, isItemInCart, 1);
      }
    },
    remove: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      if (!state.cart) return;

      const isItemInCart = state.cart.items.find((item) => item.id === action.payload.id);

      if (!isItemInCart) return;

      state.cart = {
        ...state.cart,
        items: state.cart.items.filter((pItem) => pItem.id !== action.payload.id),
        totalQuantities: state.cart.totalQuantities - isItemInCart.quantity,
      };
      state.totalPrice = state.totalPrice - isItemInCart.price * isItemInCart.quantity;
      state.adjustedTotalPrice = state.adjustedTotalPrice - calcAdjustedTotalPrice(isItemInCart.price, isItemInCart, isItemInCart.quantity);
    },
  },
});

export const { addToCart, removeCartItem, remove } = cartsSlice.actions;

export default cartsSlice.reducer;
