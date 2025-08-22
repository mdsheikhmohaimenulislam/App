"use client";

const Offer = () => {
  const offers =[
  {
    id: 1,
    title: "Spring Green Sale",
    discount: "Up to 50% Off on Indoor Plants",
    bgImage: "https://i.ibb.co.com/rW3brCk/green-leaves-plant-silver-can-wooden-desk-against-black-background.jpg"
  },
  {
    id: 2,
    title: "Herbal Special",
    discount: "Flat 30% Off on Herbs & Succulents",
    bgImage: "https://i.ibb.co.com/M5jyK2Fs/view-palm-tree-species-with-green-foliage-1.jpg"
  },
  {
    id: 3,
    title: "Tropical Treat",
    discount: "Up to 40% Off on Tropical Plants",
    bgImage: "https://i.ibb.co.com/Fb7Fnfxj/green-vase-plant-tree-decoration-interior.jpg"
  },
  {
    id: 4,
    title: "Succulent Savings",
    discount: "Flat 25% Discount on Succulents",
    bgImage: "https://i.ibb.co.com/TMQJ8fGD/diavolezza-cajsa-ranunculusglacialis-1-627x470-e1523541932542.jpg"
  }
]

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            style={{
              backgroundImage: `url(${offer.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={`relative rounded-lg overflow-hidden p-8 flex flex-col justify-center items-center text-center text-white shadow-lg hover:scale-105 transform transition-transform duration-300 cursor-pointer`}
          >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
              <p className="text-lg">{offer.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;