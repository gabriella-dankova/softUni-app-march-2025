import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { signOut } from "firebase/auth"; 
import { auth } from "../firebaseConfig"; 

export default function TopHeader({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        window.location.href = "/logInForm";
      })
      .catch((error) => {
        console.error("Error logging out:", error.message);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md py-3 px-6 flex justify-between items-center border-b border-gray-300 z-50">
      <div className="flex items-center gap-3">
        <span className="text-gray-700 font-medium">Добре дошли в SocialSell!</span>
      </div>
      
      <div className="relative w-full max-w-md mx-4">
        <input
          type="text"
          placeholder="Търси..."
          value={search}
          onChange={handleChange}
          className="w-full px-3 py-1 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>   

      <div className="flex items-center gap-4">
        <button
          onClick={() => (window.location.href = "/shopingCart")}
          className="text-gray-700 hover:text-pink-600 text-2xl"
        >
          <TiShoppingCart />
        </button>

        <button
          onClick={handleLogout}
          className="text-gray-700 hover:text-pink-600 text-xl"
        >
          Изход
        </button>
      </div>
    </header>
  );
}
