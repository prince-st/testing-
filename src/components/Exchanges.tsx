
const exchanges = [
  { name: "NYSE", logo: "/images/icon/5.png" },
  { name: "OTC Markets", logo: "/images/icon/6.png" },
  { name: "LSE", logo: "/images/icon/7.png" },
  { name: "Nasdaq", logo: "/images/icon/8.png" },
  { name: "TSX", logo: "/images/icon/1.png" },
  { name: "Americas", logo: "/images/icon/2.png" },
];

export default function Exchanges() {
  return (
    <section className="py-20 bg-white">
      <div className="fn-container text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          We Support all <span className="text-blue-600">Global Exchanges</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          Contact us for company exchange news & support
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {exchanges.map((exchange) => (
            <div key={exchange.name} className="flex justify-center">
              <img src={exchange.logo} alt={exchange.name} className="h-12 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
