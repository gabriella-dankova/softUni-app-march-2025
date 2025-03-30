// import { useEffect, useState } from "react"
// import CatalogItem from "./CatalogItem"

// // const products = [
// //     {
// //       id: 1,
// //       name: 'Earthen Bottle',
// //       href: '#',
// //       price: '$48',
// //       imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
// //       imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
// //     },
// //     {
// //       id: 2,
// //       name: 'Nomad Tumbler',
// //       href: '#',
// //       price: '$35',
// //       imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
// //       imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
// //     },
// //     {
// //       id: 3,
// //       name: 'Focus Paper Refill',
// //       href: '#',
// //       price: '$89',
// //       imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
// //       imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
// //     },
// //     {
// //       id: 4,
// //       name: 'Machined Mechanical Pencil',
// //       href: '#',
// //       price: '$35',
// //       imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
// //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
// //     },
// //     // More products...
// //   ]
  
//   export default function Catalog() {
//     const [products, setProducts] = useState([]);


//     useEffect (() => {
//         fetch('https://fakestoreapi.com/products')
//         .then(res => res.json())
//         .then(result => {
//              setProducts(result);
//         })
//     }, [])

//     return (
//       <div className="bg-white">
//         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//           <h2 className="sr-only">Products</h2>
  
//           <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//             {products.map((product) => (
//               <CatalogItem key={product.id} product={product}/>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }
  
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

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
      
      <div className="mx-auto max-w-7xl px-4 py-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md relative">
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
                className={`absolute bottom-4 right-4 text-xl transition-all ${likedItems.includes(product.id) ? "text-pink-500" : "text-gray-400"}`}
                onClick={() => toggleLike(product.id)}
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
