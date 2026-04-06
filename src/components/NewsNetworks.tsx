
const networks = [
  { name: "Bloomberg", logo: "/images/icon/5.png" },
  { name: "Reuters", logo: "/images/icon/6.png" },
  { name: "Dow Jones", logo: "/images/icon/7.png" },
  { name: "MarketWatch", logo: "/images/icon/8.png" },
  { name: "TMX Money", logo: "/images/icon/1.png" },
];

export default function NewsNetworks() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="fn-container text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Premium News Networks
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          Distribute & Publish to...
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {networks.map((network) => (
            <div key={network.name} className="flex justify-center">
              <img src={network.logo} alt={network.name} className="h-10 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
