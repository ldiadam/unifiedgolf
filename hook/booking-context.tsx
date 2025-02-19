"use client";
import { BookingItem, Location } from "@/lib/types";
import React, { createContext, useContext, useReducer } from "react";

// Define cart state
interface CartState {
  items: BookingItem[];
  total: number;
}

// Define action types
type CartAction =
  | { type: "ADD_BOOKING"; payload: BookingItem }
  | { type: "REMOVE_BOOKING"; payload: string }
  | { type: "CLEAR_CART" };

// Create context
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

// Initial state
const initialState: CartState = {
  items: [],
  total: 0,
};

// Reducer function
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_BOOKING":
      const existingItemIndex = state.items.findIndex(
        (item) => item.bookingId === action.payload.bookingId
      );

      if (existingItemIndex > -1) {
        // Replace existing booking
        const newItems = [...state.items];
        newItems[existingItemIndex] = action.payload;
        return {
          items: newItems,
          total: calculateTotal(newItems),
        };
      }

      // Add new booking
      const newItems = [...state.items, action.payload];
      return {
        items: newItems,
        total: calculateTotal(newItems),
      };

    case "REMOVE_BOOKING":
      const filteredItems = state.items.filter(
        (item) => item.bookingId !== action.payload
      );
      return {
        items: filteredItems,
        total: calculateTotal(filteredItems),
      };

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
}

// Helper function to calculate total
function calculateTotal(items: BookingItem[]): number {
  return items.reduce((total, item) => total + item.totalPrice, 0);
}

// Provider component
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
