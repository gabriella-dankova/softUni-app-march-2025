import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import TopHeader from "./TopHeader";
import { FaTimes } from "react-icons/fa"; 

export default function LikedItemsPage() {
  const [likedItems, setLikedItems] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

 
  useEffect(() => {
    const savedLikes = localStorage.getItem("likedItems");
    setLikedItems(savedLikes ? JSON.parse(savedLikes) : []);
  }, []);

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        const localData = localStorage.getItem("customProducts");
        const localProducts = localData ? JSON.parse(localData) : [];
        const allProducts = [...result, ...localProducts];
        const liked = allProducts.filter((item) => likedItems.includes(item.id));
        setProducts(liked);
      });
  }, [likedItems]);

  const removeFromLiked = (id) => {
    const updatedLikes = likedItems.filter((itemId) => itemId !== id);
    setLikedItems(updatedLikes);
    localStorage.setItem("likedItems", JSON.stringify(updatedLikes));
  };

  return (
    <div className="min-h-screen bg-[var(--color-lime-100)] pt-5">
      <div className="mx-auto max-w-7xl px-4 py-12 pb-20">
        <TopHeader />
        <Header />
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Харесани обяви</h2>
        {products.length === 0 ? (
          <p className="text-gray-500">Нямате харесани обяви.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md relative"
              >
                <div
                  className="cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md text-gray-500">
                      Няма изображение
                    </div>
                  )}
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700">{product.title}</h3>
                    <p className="text-pink-600 font-bold mt-2">{product.price} лв.</p>
                  </div>
                </div>

                
                <button
                  className="absolute bottom-4 right-4 text-red-500 hover:text-red-700 text-xl"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    removeFromLiked(product.id);
                  }}
                >
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
