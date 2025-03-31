// import { useEffect, useState } from "react";
// import { FaHeart } from "react-icons/fa";
// import Header from "./Header";
// import TopHeader from "./TopHeader";

// export default function Catalog() {
//   const [products, setProducts] = useState([]);
//   const [likedItems, setLikedItems] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((result) => {
//         setProducts(result);
//       });
//   }, []);

//   const toggleLike = (id) => {
//     setLikedItems((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div className="min-h-screen bg-[var(--color-lime-100)]">
      
//       <div className="mx-auto max-w-7xl px-4 py-12 pb-20">
//         <TopHeader />
//         <Header />
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div key={product.id} className="bg-white p-4 rounded-lg shadow-md relative">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-48 object-cover rounded-md"
//               />
//               <div className="mt-4">
//                 <h3 className="text-lg font-semibold text-gray-700">{product.title}</h3>
//                 <p className="bottom-4 left-4 text-pink-600 font-bold mt-2">{product.price} лв.</p>
//               </div>
//               <button
//                 className={`absolute bottom-4 right-4 text-xl transition-all ${likedItems.includes(product.id) ? "text-pink-500" : "text-gray-400"}`}
//                 onClick={() => toggleLike(product.id)}
//               >
//                 <FaHeart />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Импортирай useNavigate
import Header from "./Header";
import TopHeader from "./TopHeader";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const navigate = useNavigate(); // Инициализирай навигацията

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[var(--color-lime-100)]">
      <div className="mx-auto max-w-7xl px-4 py-12 pb-20">
        <TopHeader />
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md relative cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)} // Навигирай към детайлите
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">{product.title}</h3>
                <p className="bottom-4 left-4 text-pink-600 font-bold mt-2">{product.price} лв.</p>
              </div>
              <button
                className={`absolute bottom-4 right-4 text-xl transition-all ${
                  likedItems.includes(product.id) ? "text-pink-500" : "text-gray-400"
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // Спира пренасочването при натискане на бутона
                  toggleLike(product.id);
                }}
              >
                <FaHeart />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
