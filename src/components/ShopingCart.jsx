import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="min-h-screen bg-[var(--color-lime-100)] flex justify-center items-start pt-10 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Твоята количка</h2>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 text-lg">Количката е празна.</p>
            <Link
              to="/catalog"
              className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Разгледай продукти
            </Link>
          </div>
        ) : (
          <div>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4 text-gray-600"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1 ml-4">
                    <p className="font-semibold text-lg">{item.title}</p>
                    <p className="text-gray-600">{item.price} лв.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="w-16 p-2 border rounded-md"
                      min="1"
                    />
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <p className="text-xl font-bold">Общо: {calculateTotal()} лв.</p>
              <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
                Поръчай
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
