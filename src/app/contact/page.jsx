"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const pastelColors = ["bg-blue-50", "bg-green-50", "bg-yellow-50", "bg-pink-50"];

const appPlant = [
  {
    "name": "Snake Plant",
    "description": "A hardy indoor plant known for purifying air and thriving in low light.",
    "img": "https://images.pexels.com/photos/5699669/pexels-photo-5699669.jpeg",
    "price": 18.99
  },
  {
    "name": "Monstera Deliciosa",
    "description": "Popular for its unique split leaves, perfect for modern home décor.",
    "img": "https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg",
    "price": 34.99
  },
  {
    "name": "Peace Lily",
    "description": "Elegant white flowers and glossy leaves that thrive in shade.",
    "img": "https://images.pexels.com/photos/5699664/pexels-photo-5699664.jpeg",
    "price": 22.50
  },
  {
    "name": "Aloe Vera",
    "description": "Medicinal succulent plant with soothing gel-filled leaves.",
    "img": "https://images.pexels.com/photos/458698/pexels-photo-458698.jpeg",
    "price": 12.99
  },
  {
    "name": "Fiddle Leaf Fig",
    "description": "Tall indoor plant with large violin-shaped leaves.",
    "img": "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg",
    "price": 45.00
  },
  {
    "name": "Spider Plant",
    "description": "Easy-care plant with arching green and white striped leaves.",
    "img": "https://images.pexels.com/photos/4505170/pexels-photo-4505170.jpeg",
    "price": 15.99
  },
  {
    "name": "Rubber Plant",
    "description": "Glossy, dark green leaves and strong air-purifying qualities.",
    "img": "https://images.pexels.com/photos/5699667/pexels-photo-5699667.jpeg",
    "price": 28.99
  },
  {
    "name": "Succulent Mix",
    "description": "Low-maintenance small plants that store water in their leaves.",
    "img": "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg",
    "price": 9.99
  },
  {
    "name": "Cactus",
    "description": "Drought-resistant plant with unique shapes and textures.",
    "img": "https://images.pexels.com/photos/450517/pexels-photo-450517.jpeg",
    "price": 14.50
  },
  {
    "name": "ZZ Plant",
    "description": "Shiny green foliage, thrives in low-light and neglect.",
    "img": "https://images.pexels.com/photos/6208083/pexels-photo-6208083.jpeg",
    "price": 29.99
  },
  {
    "name": "Pothos",
    "description": "Trailing vine with heart-shaped leaves, grows quickly indoors.",
    "img": "https://images.pexels.com/photos/2123241/pexels-photo-2123241.jpeg",
    "price": 16.75
  },
  {
    "name": "Chinese Money Plant",
    "description": "Round, coin-like leaves bring prosperity and charm.",
    "img": "https://images.pexels.com/photos/5699668/pexels-photo-5699668.jpeg",
    "price": 21.50
  },
  {
    "name": "Areca Palm",
    "description": "Tropical indoor palm with feathery green fronds.",
    "img": "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg",
    "price": 39.99
  },
  {
    "name": "Jade Plant",
    "description": "Lucky plant with thick oval-shaped leaves.",
    "img": "https://images.pexels.com/photos/2123243/pexels-photo-2123243.jpeg",
    "price": 19.50
  },
  {
    "name": "Calathea",
    "description": "Vibrant patterned leaves that move with light changes.",
    "img": "https://images.pexels.com/photos/450545/pexels-photo-450545.jpeg",
    "price": 24.75
  },
  {
    "name": "Boston Fern",
    "description": "Lush feathery fronds that add freshness to any room.",
    "img": "https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg",
    "price": 18.25
  },
  {
    "name": "Lavender",
    "description": "Fragrant purple flowers, great for relaxation and décor.",
    "img": "https://images.pexels.com/photos/712786/pexels-photo-712786.jpeg",
    "price": 13.99
  },
  {
    "name": "Bamboo Palm",
    "description": "Compact palm with graceful stems, perfect for small spaces.",
    "img": "https://images.pexels.com/photos/1084200/pexels-photo-1084200.jpeg",
    "price": 26.99
  },
  {
    "name": "Orchid",
    "description": "Delicate flowers in vibrant colors, symbol of elegance.",
    "img": "https://images.pexels.com/photos/56866/orchid-blossom-bloom-flower-56866.jpeg",
    "price": 32.99
  },
  {
    "name": "Herb Basil",
    "description": "Aromatic herb plant, perfect for cooking and fresh salads.",
    "img": "https://images.pexels.com/photos/3621435/pexels-photo-3621435.jpeg",
    "price": 10.50
  }
]


const Product = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setProducts(appPlant); // directly set data instead of fetch
  }, []);

  if (!products.length) return <p className="text-center mt-10">Loading...</p>;

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden p-4 flex flex-col items-center justify-center
              ${pastelColors[index % pastelColors.length]} shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
            onClick={() => router.push(`/products/${index}`)}
          >
            <img
              src={product.img}
              alt={product.name}

              className="object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
