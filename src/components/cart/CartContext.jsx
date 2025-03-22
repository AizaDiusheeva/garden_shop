import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Создаём контекст корзины
const CartContext = createContext();
 

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ✅ 1. Загружаем корзину с сервера
  useEffect(() => {
    axios.get("http://localhost:3333/cart")
      .then(response => setCart(response.data))
      .catch(error => console.error("Ошибка загрузки корзины", error));
  }, []);

  // ✅ 2. Добавляем товар в корзину
  const addToCart = async (product) => {
    try {
      const response = await axios.post("http://localhost:3333/order/send", product);
      setCart([...cart, response.data]); // Обновляем состояние
    } catch (error) {
      console.error("Ошибка добавления товара", error);
    }
  };

  // ✅ 3. Удаляем товар из корзины
  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`http://localhost:3333/cart/${productId}`);
      setCart(cart.filter(item => item.id !== productId));
    } catch (error) {
      console.error("Ошибка удаления товара", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Кастомный хук
export function useCart() {
  return useContext(CartContext);
}
