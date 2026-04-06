import { motion } from "framer-motion";

const services = [
  {
    title: "US",
    description: "Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.",
    icon: "/images/icon/1.png",
  },
  {
    title: "Canada",
    description: "Distribute your company’s capital markets content and comply with Canadian market regulation (SEDAR).",
    icon: "/images/icon/2.png",
  },
  {
    title: "UK",
    description: "Distribute your capital markets content & Comply with UK’s Listing Authority (FCA).",
    icon: "/images/icon/3.png",
  },
  {
    title: "Europe",
    description: "Distribute your company capital markets content and comply with European Transparency Directive and market regulations.",
    icon: "/images/icon/4.png",
  }
];

export default function ServicesGrid() {
  return (
    <section className="bg-slate-50 relative py-20 lg:py-32 overflow-hidden">
      <div className="fn-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start text-left"
            >
              <img src={service.icon} alt={service.title} className="w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
