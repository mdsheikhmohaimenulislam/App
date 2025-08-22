"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../globals.css";

const pastelColors = [
  "bg-blue-50",
  "bg-green-50",
  "bg-yellow-50",
  "bg-pink-50",
];

const appPlant = [
  {
    id: 1,
    name: "Snake Plant",
    description:
      "A hardy indoor plant known for purifying air and thriving in low light.",
    img: "https://i.ibb.co.com/KjMHXJpF/front-view-potted-plant-wooden-surface.jpg",
    price: 18.99,
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    description:
      "Popular for its unique split leaves, perfect for modern home décor.",
    img: "https://i.ibb.co.com/5h4DgmJX/beautiful-plant-illustration-1.jpg",
    price: 34.99,
  },
  {
    id: 3,
    name: "Peace Lily",
    description:
      "Elegant white flowers and glossy leaves that thrive in shade.",
    img: "https://i.ibb.co.com/Z6RHtDHF/beautiful-plant-illustration.jpg",
    price: 22.5,
  },
  {
    id: 4,
    name: "Aloe Vera",
    description: "Medicinal succulent plant with soothing gel-filled leaves.",
    img: "https://i.ibb.co.com/3msMsWZT/vase-plant-decoration-interior.jpg",
    price: 12.99,
  },
  {
    id: 5,
    name: "Fiddle Leaf Fig",
    description: "Tall indoor plant with large violin-shaped leaves.",
    img: "https://i.ibb.co.com/35pgSbr4/indoor-plants-studio-1.jpg",
    price: 45.0,
  },
  {
    id: 6,
    name: "Spider Plant",
    description: "Easy-care plant with arching green and white striped leaves.",
    img: "https://i.ibb.co.com/VYCwLCBH/indoor-plants-studio.jpg",
    price: 15.99,
  },
  {
    id: 7,
    name: "Rubber Plant",
    description:
      "Glossy, dark green leaves and strong air-purifying qualities.",
    img: "https://i.ibb.co.com/7tKZMy7X/houseplant-with-long-leaves-pot-against-wooden-wall-lights.jpg",
    price: 28.99,
  },
  {
    id: 8,
    name: "Succulent Mix",
    description:
      "Low-maintenance small plants that store water in their leaves.",
    img: "https://i.ibb.co.com/rW3brCk/green-leaves-plant-silver-can-wooden-desk-against-black-background.jpg",
    price: 9.99,
  },
  {
    id: 9,
    name: "Cactus",
    description: "Drought-resistant plant with unique shapes and textures.",
    img: "https://i.ibb.co.com/Fb7Fnfxj/green-vase-plant-tree-decoration-interior.jpg",
    price: 14.5,
  },
  {
    id: 10,
    name: "ZZ Plant",
    description: "Shiny green foliage, thrives in low-light and neglect.",
    img: "https://i.ibb.co.com/zhqH58w9/view-palm-tree-species-with-green-foliage-3.jpg",
    price: 29.99,
  },
  {
    id: 11,
    name: "Pothos",
    description:
      "Trailing vine with heart-shaped leaves, grows quickly indoors.",
    img: "https://i.ibb.co.com/rRZxzGWs/view-palm-tree-species-with-green-foliage-2.jpg",
    price: 16.75,
  },
  {
    id: 12,
    name: "Chinese Money Plant",
    description: "Round, coin-like leaves bring prosperity and charm.",
    img: "https://i.ibb.co.com/rRZxzGWs/view-palm-tree-species-with-green-foliage-2.jpg",
    price: 21.5,
  },
  {
    id: 13,
    name: "Areca Palm",
    description: "Tropical indoor palm with feathery green fronds.",
    img: "https://i.ibb.co.com/M5jyK2Fs/view-palm-tree-species-with-green-foliage-1.jpg",
    price: 39.99,
  },
  {
    id: 14,
    name: "Jade Plant",
    description: "Lucky plant with thick oval-shaped leaves.",
    img: "https://i.ibb.co.com/q3WWJ4mb/view-palm-tree-species-with-green-foliage.jpg",
    price: 19.5,
  },
  {
    id: 15,
    name: "Calathea",
    description: "Vibrant patterned leaves that move with light changes.",
    img: "https://i.ibb.co.com/TMQJ8fGD/diavolezza-cajsa-ranunculusglacialis-1-627x470-e1523541932542.jpg",
    price: 24.75,
  },
  {
    id: 16,
    name: "Boston Fern",
    description: "Lush feathery fronds that add freshness to any room.",
    img: "https://i.ibb.co.com/q3WWJ4mb/view-palm-tree-species-with-green-foliage.jpg",
    price: 18.25,
  },
  {
    id: 17,
    name: "Lavender",
    description: "Fragrant purple flowers, great for relaxation and décor.",
    img: "https://i.ibb.co.com/q3WWJ4mb/view-palm-tree-species-with-green-foliage.jpg",
    price: 13.99,
  },
  {
    id: 18,
    name: "Bamboo Palm",
    description: "Compact palm with graceful stems, perfect for small spaces.",
    img: "https://i.ibb.co.com/q3WWJ4mb/view-palm-tree-species-with-green-foliage.jpg",
    price: 26.99,
  },
  {
    id: 19,
    name: "Orchid",
    description: "Delicate flowers in vibrant colors, symbol of elegance.",
    img: "https://i.ibb.co.com/q3WWJ4mb/view-palm-tree-species-with-green-foliage.jpg",
    price: 32.99,
  },
  {
    id: 20,
    name: "Herb Basil",
    description: "Aromatic herb plant, perfect for cooking and fresh salads.",
    img: "https://i.ibb.co.com/q3WWJ4mb/view-palm-tree-species-with-green-foliage.jpg",
    price: 10.5,
  },
    {
    id: 21,
    name: "Fiddle Leaf Fig",
    description: "Tall indoor plant with large violin-shaped leaves.",
    img: "https://i.ibb.co.com/35pgSbr4/indoor-plants-studio-1.jpg",
    price: 45.0,
  },
];

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

      <div className="grid grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div className="card bg-base-100  shadow-sm"
          onClick={() => router.push(`/products/${product.id}`)}
          key={index}
          >
            <figure>
              <img
                src={product.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title ">{product.name}</h2>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
// onClick={() => router.push(`/products/${product.id}`)}
