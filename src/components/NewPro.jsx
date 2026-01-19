const products = [
  {
    id: 1,
    name: "Wireless Headphone",
    price: "$99",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "$120",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    name: "Backpack",
    price: "$79",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  },
];

export default function NewProducts() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">
          New Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="
                group
                border rounded-xl overflow-hidden
                shadow-md
                transition-all duration-300 ease-in-out
                hover:shadow-2xl
                hover:scale-105
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full h-56 object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-1">
                  {product.price}
                </p>

                <button
                  className="
                    mt-4 w-full
                    bg-black text-white py-2 rounded-lg
                    transition-all duration-300
                    hover:bg-gray-800
                    hover:scale-105
                  "
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
