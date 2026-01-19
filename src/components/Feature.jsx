import React from "react";

const Features = () => {
  const features = [
    { icon: "🚚", title: "Free Delivery", description: "To Your Door" },
    { icon: "📍", title: "Local Pickup", description: "Check Out Locations" },
    { icon: "💬", title: "Available for You", description: "Online Support 24/7" },
    { icon: "📱", title: "Order on the Go", description: "Download Our App" },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
