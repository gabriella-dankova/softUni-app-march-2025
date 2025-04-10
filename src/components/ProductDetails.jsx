import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedPrice, setEditedPrice] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [isLocalProduct, setIsLocalProduct] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("customProducts")) || [];
    const localProduct = stored.find((p) => p.id.toString() === id);

    if (localProduct) {
      setProduct(localProduct);
      setIsLocalProduct(true);
    } else {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Продуктът не съществува.");
          }
          return res.json();
        })
        .then((data) => setProduct(data))
        .catch((err) => {
          console.error(err);
          navigate("/catalog");
        });
    }
  }, [id, navigate]);

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const handleDeleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  const handleSaveEdit = () => {
    const updatedProduct = {
      ...product,
      price: editedPrice,
      description: editedDescription,
    };

    setProduct(updatedProduct);
    setEditMode(false);

    const stored = JSON.parse(localStorage.getItem("customProducts")) || [];
    const updatedProducts = stored.map((p) =>
      p.id.toString() === id ? updatedProduct : p
    );

    localStorage.setItem("customProducts", JSON.stringify(updatedProducts));
  };

  const handleDeleteProduct = () => {
    const confirmDelete = window.confirm("Сигурен ли си, че искаш да изтриеш тази обява?");
    if (!confirmDelete) return;

    const stored = JSON.parse(localStorage.getItem("customProducts")) || [];
    const updated = stored.filter((p) => p.id.toString() !== id);
    localStorage.setItem("customProducts", JSON.stringify(updated));
    navigate("/catalog");
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Продуктът е добавен в количката!");
  };

  if (!product) return <p>Зареждане...</p>;

  return (
    <div className="min-h-screen bg-[var(--color-lime-100)] flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-gray-600 hover:text-black"
        >
          <FaArrowLeft size={24} />
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover rounded-md"
        />

        <div className="p-4">
          <h2 className="text-2xl font-bold mt-4">{product.title}</h2>

          {!editMode ? (
            <>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="flex justify-between items-center mt-6">
                <p className="text-pink-600 font-bold text-2xl">
                  {product.price} лв.
                </p>
                <button
                  onClick={handleAddToCart}
                  className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-pink-600"
                >
                  Добави в количката
                </button>
              </div>
              {isLocalProduct && (
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={() => {
                      setEditMode(true);
                      setEditedPrice(product.price);
                      setEditedDescription(product.description);
                    }}
                    className="text-gray-600 hover:underline"
                  >
                    ✏️ Редактирай
                  </button>
                  <button
                    onClick={handleDeleteProduct}
                    className="text-red-600 hover:underline"
                  >
                    ️ Изтрий обявата
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="mt-4">
              <label className="block mb-2">Описание:</label>
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                className="w-full p-2 border rounded-lg mb-4 text-gray-600"
              />
              <label className="block mb-2">Цена (лв.):</label>
              <input
                type="number"
                value={editedPrice}
                onChange={(e) => setEditedPrice(e.target.value)}
                className="w-full p-2 border rounded-lg mb-4"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSaveEdit}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  Запази
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                >
                  Откажи
                </button>
              </div>
            </div>
          )}

          <hr className="my-6 border-gray-300" />

          <div>
            <h3 className="text-gray-600 text-lg font-semibold mb-2">
              Коментари
            </h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="flex-1 p-2 border rounded-lg"
                placeholder="Напиши коментар..."
              />
              <button
                onClick={handleAddComment}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
              >
                Добави
              </button>
            </div>
            <ul className="mt-4">
              {comments.map((c, index) => (
                <li
                  key={index}
                  className="p-2 bg-gray-300 rounded-lg mt-2 flex justify-between items-center"
                >
                  <span>{c}</span>
                  <button
                    onClick={() => handleDeleteComment(index)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Изтрий
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}