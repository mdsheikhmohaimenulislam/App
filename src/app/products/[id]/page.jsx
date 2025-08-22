"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const appPlant = [
  {
    id: 1,
    name: "Snake Plant",
    description:
      "A hardy indoor plant known for purifying air and thriving in low light.",
    img: "https://i.ibb.co/KjMHXJpF/front-view-potted-plant-wooden-surface.jpg",
    price: 18.99,
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    description:
      "Popular for its unique split leaves, perfect for modern home décor.",
    img: "https://i.ibb.co/5h4DgmJX/beautiful-plant-illustration-1.jpg",
    price: 34.99,
  },
  {
    id: 3,
    name: "Peace Lily",
    description:
      "Elegant white flowers and glossy leaves that thrive in shade.",
    img: "https://i.ibb.co/Z6RHtDHF/beautiful-plant-illustration.jpg",
    price: 22.5,
  },
  // ... baki plants
];

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = appPlant.find((p) => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
<div className="min-h-screen flex items-center justify-center p-6">
  <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
    {/* Left: Product Image */}
    <div className="md:w-1/2 flex justify-center items-start">
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <img
          src={product.img}
          alt={product.name}
          width={500}
          height={500}
          className="transition-transform duration-300 ease-in-out hover:scale-110 object-contain"
        />
      </div>
    </div>

    {/* Right: Product Details */}
    <div className="md:w-1/2 flex flex-col gap-4">
      <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>

      <div className="mt-4 flex items-center gap-3">
        <p className="text-xl font-bold text-green-600">${product.price}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">About this item</h2>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  </div>
</div>
  );
};

export default ProductDetails;
