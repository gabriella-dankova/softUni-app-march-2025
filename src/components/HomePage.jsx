import { useState } from "react";
import "./HomePage.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";


export default function HomePage() {
  const [search, setSearch] = useState("");
  const [likedItems, setLikedItems] = useState([]);

  const items = [
    { id: 1, name: "Рокля", price: "30 лв.", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Яке", price: "50 лв.", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Дънки", price: "40 лв.", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Тениска", price: "20 лв.", img: "https://via.placeholder.com/150" },
  ];

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

 
  return (
    <div className="home-container">
      <div className="top-bar">
        <input
          type="text"
          className="search-bar"
          placeholder="Търси дрехи..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="icons">
          <FaHeart color={likedItems.length > 0 ? "red" : "gray"} />
          <FaShoppingCart />
        </div>
      </div>

      <div className="items-container">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt={item.name} />
            <div className="item-info">
              <p>{item.name}</p>
              <p className="price">{item.price}</p><button
                className={`like-button ${likedItems.includes(item.id) ? "liked" : ""}`}
                onClick={() => toggleLike(item.id)}
              >
                ♥
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
