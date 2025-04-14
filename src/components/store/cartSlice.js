import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};
const loadDiscountsFromStorage = () => {
  const savedDiscounts = localStorage.getItem("discounts");
  return savedDiscounts ? JSON.parse(savedDiscounts) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromStorage(),
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      console.log("Товар в addToCart:", item);

      const existingItem = state.items.find((i) => i.id === item.id);
      const savedItem = loadDiscountsFromStorage().find(
        (i) => i.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        const newItem = {
          ...item,
          discont_price:
            savedItem?.discont_price ?? item.discont_price ?? item.price, // ✅ Исправленный код
        };
        console.log("Добавляем в Redux:", newItem);
        state.items.push(newItem);
      }

      console.log("Состояние корзины после добавления:", state.items);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
