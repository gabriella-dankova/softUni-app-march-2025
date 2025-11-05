import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import TopHeader from "./TopHeader";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    const savedLikes = localStorage.getItem("likedItems");
    if (savedLikes) {
      setLikedItems(JSON.parse(savedLikes));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        const localData = localStorage.getItem("customProducts");
        const localProducts = localData ? JSON.parse(localData) : [];
        const allProducts = [...result, ...localProducts];
        setProducts(allProducts);
      });
  }, []);

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredProducts = products.filter((product) => {
  const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
  const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
  return matchesPrice && matchesSearch;
  });


  return (
    <div className="min-h-screen bg-[var(--color-lime-100)] pt-5">
      <div className="mx-auto max-w-7xl px-4 py-12 pb-20">
        <TopHeader onSearch={setSearchTerm} />
        <Header />
        <div className="flex gap-4 mb-6">
          <input
            type="number"
            placeholder="Цена от..."
            className="border p-2 rounded bg-white"
            onChange={(e) => setMinPrice(Number(e.target.value) || 0)}
          />
          <input
            type="number"
            placeholder="до..."
            className="border p-2 rounded bg-white"
            onChange={(e) => setMaxPrice(Number(e.target.value) || Infinity)}
          />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Наскоро добавени обяви</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md relative cursor-pointer"
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
{/* 
              {filteredProducts.length === 0 && (
                 <p className="text-center text-gray-600 col-span-full">
                  Няма намерени продукти.
                </p>
               )} */}


              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">{product.title}</h3>
                <p className="bottom-4 left-4 text-pink-600 font-bold mt-2">{product.price} лв.</p>
              </div>
              <button
                className={`absolute bottom-4 right-4 text-xl transition-all ${
                  likedItems.includes(product.id) ? "text-pink-500" : "text-gray-400"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(product.id);
                }}
              >
                <FaHeart />
              </button>
            </div>
          ))}

          {filteredProducts.length === 0 && (
           <p className="text-center text-gray-600 text-lg font-medium col-span-full">
            Няма намерени продукти.
          </p>
           )}

        </div>
      </div>
    </div>
  );
}
