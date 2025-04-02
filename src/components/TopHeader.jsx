import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti"; 

export default function TopHeader() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // Добавено useNavigate()

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
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-1 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>   

      <button 
        onClick={() => navigate("/shopingCart")} // Поправено!
        className="text-gray-700 hover:text-indigo-600 text-2xl"
      >
        <TiShoppingCart />
      </button>
    </header>
  );
}
