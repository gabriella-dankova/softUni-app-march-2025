import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig"; // предполагам, че вече си настроила firebase
import { collection, addDoc } from "firebase/firestore";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "products"), {
        title,
        price: parseFloat(price),
        image,
        description,
        createdAt: new Date(),
      });
      navigate("/catalog");
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-lime-100)] flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Добави нова обява</h2>
        <input
          type="text"
          placeholder="Заглавие"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="number"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Линк към снимка"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
        >
          Публикувай
        </button>
      </form>
    </div>
  );
}
