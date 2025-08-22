import { useState } from "react";
import { ShoppingCart, Search } from "lucide-react";

const products = [
  { id: 1, name: "Smartphone X", price: 300, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Headphones Pro", price: 80, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Smart Watch", price: 120, image: "https://via.placeholder.com/200" },
  { id: 4, name: "Laptop Z", price: 700, image: "https://via.placeholder.com/200" },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => setCart([...cart, product]);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Bull face logo (site pe dikhega) */}
          <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            🐂
          </div>
          <h1 className="text-2xl font-extrabold text-orange-700">ANU Mart</h1>
        </div>

        <div className="flex gap-2 items-center">
          <div className="flex items-center border rounded px-2">
            <Search className="text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-2 py-1 outline-none"
            />
          </div>
          <div className="relative cursor-pointer">
            <ShoppingCart className="text-gray-700" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Products */}
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4" />
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-700 mb-2">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}
