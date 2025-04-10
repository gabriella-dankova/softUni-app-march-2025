import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const [userProducts, setUserProducts] = useState([]);
  const [profileName, setProfileName] = useState("Габи_23");
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || "https://i.pravatar.cc/150?img=68"
  );
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState(profileName);
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("customProducts")) || [];
    setUserProducts(stored);

    const storedName = localStorage.getItem("profileName");
    if (storedName) setProfileName(storedName);
  }, []);

  const handleSaveProfile = () => {
    setProfileName(newName);
    localStorage.setItem("profileName", newName);

    if (newImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(newImage);
    }

    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-[var(--color-lime-100)] flex justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-6 mb-6 border-b pb-6">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-pink-400 object-cover"
            />
            {editMode && (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setNewImage(e.target.files[0])}
                className="absolute bottom-0 left-0 text-xs"
              />
            )}
          </div>

          <div>
            {!editMode ? (
              <>
                <h2 className="text-2xl font-bold">{profileName}</h2>
                <div className="flex gap-6 mt-2 text-gray-600">
                  <p>
                    <span className="font-bold">{userProducts.length}</span> обяви
                  </p>
                  
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">Потребителско име:</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="p-2 border rounded-lg"
                />
              </div>
            )}
          </div>

          <div className="ml-auto">
            {!editMode ? (
              <button
                onClick={() => setEditMode(true)}
                className="bg-gray-400 px-4 py-2 rounded-lg text-sm hover:bg-gray-300"
              >
                ✏️ Редактирай профила
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleSaveProfile}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
                >
                  💾 Запази
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg text-sm"
                >
                  Отказ
                </button>
              </div>
            )}
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-gray-700">Моите обяви</h3>
        {userProducts.length === 0 ? (
          <p className="text-gray-500">Все още нямаш добавени обяви.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {userProducts.map((product) => (
              <Link
                key={product.id}
                to={`/catalog/${product.id}`}
                className="block border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h4 className="font-semibold text-gray-800 truncate">
                    {product.title}
                  </h4>
                  <p className="text-pink-600 font-bold">{product.price} лв.</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
