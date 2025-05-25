const Partners = () => {
  const partners = [
    { name: "MINEDUC", image: "/logo-mineduc.png" },
    { name: "Rwanda Education Board", image: "/logo-reb.png" },
    { name: "Rwanda TVET Board", image: "/logo-rtb.png" },
    { name: "UNDP", image: "/logo-undp.png" }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Supported By</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <img 
              key={index} 
              src={partner.image} 
              alt={partner.name} 
              className="h-12 opacity-70 hover:opacity-100 transition-opacity" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;