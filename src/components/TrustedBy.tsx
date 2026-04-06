import newShape1 from "@/assets/new_shape_1.png";
import newShape2 from "@/assets/new_shape_2.png";
import shape2 from "@/assets/Shape_2.png";

const mediaOutlets = [
  { abbr: "TC", name: "TechCrunch" },
  { abbr: "FB", name: "Forbes" },
  { abbr: "RT", name: "Reuters" },
  { abbr: "BB", name: "Bloomberg" },
  { abbr: "AP", name: "Associated Press" },
  { abbr: "WSJ", name: "Wall Street Journal" },
  { abbr: "CNN", name: "CNN" },
  { abbr: "BBC", name: "BBC" },
  { abbr: "FT", name: "Financial Times" },
  { abbr: "TG", name: "The Guardian" },
  { abbr: "BI", name: "Business Insider" },
  { abbr: "WD", name: "Wired" },
];

const stats = [
  { value: "50,000+", label: "Media Outlets", sub: "Global reach across all industries" },
  { value: "185", label: "Countries", sub: "Worldwide distribution network" },
  { value: "24/7", label: "Distribution", sub: "Round-the-clock media coverage" },
];

const recognitions = [
  {
    title: "Industry Recognition",
    items: [
      "PR Week Awards - Platform of the Year",
      "G2 Leader in PR Software",
      "Capterra Best Value Winner",
    ],
  },
  {
    title: "Security & Compliance",
    items: [
      "SOC 2 Type II Certified",
      "GDPR Compliant",
      "Enterprise-Grade Security",
    ],
  },
];

export default function TrustedBy() {
  return (
    <div className="w-full">
      {/* Top wave */}
      {/* <div className="w-full leading-[0]">
        <img src={newShape2} alt="" className="w-full block" /> 
      </div> */}


        {/* Wave transition from light to dark */}
      <div className="w-full leading-[0]" style={{ background: "#0D1A5E" }}>
        <img src={newShape1} alt="" className="w-full block" />
      </div>

      {/* Full-width dark navy section */}
      <section className="w-full" style={{ background: "#0d1a5e" }}>
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Trusted by Leading Media Outlets<br />Worldwide
            </h2> 
            <p className="text-blue-200 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Our platform connects your stories with top-tier journalists and publications across every industry.
            </p>
          </div>

          {/* Media outlet grid — 6 cols desktop, 3 mobile */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-14">
            {mediaOutlets.map((outlet, i) => (
              <div
                key={i}
                className="group flex flex-col items-center justify-center gap-2.5 rounded-xl py-5 px-3 cursor-pointer transition-all duration-200"
                style={{
                  background: "rgba(51, 102, 255, 0.35)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#0d1a5e";
                  e.currentTarget.style.border = "1px solid #fff";
                  const icon = e.currentTarget.querySelector(".outlet-icon") as HTMLElement;
                  const label = e.currentTarget.querySelector(".outlet-label") as HTMLElement;
                  if (icon) { icon.style.background = "rgba(148, 170, 161, 0.15)"; icon.style.border = "1px solid rgba(51,102,255,0.3)"; icon.style.color = "#3366FF"; }
                  if (label) label.style.color = "#0d1a5e";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(51, 102, 255, 0.35)";
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.15)";
                  const icon = e.currentTarget.querySelector(".outlet-icon") as HTMLElement;
                  const label = e.currentTarget.querySelector(".outlet-label") as HTMLElement;
                  if (icon) { icon.style.background = "rgba(255,255,255,0.18)"; icon.style.border = "1px solid rgba(255,255,255,0.3)"; icon.style.color = "#fff"; }
                  if (label) label.style.color = "#fff";
                }}
              >
                {/* Icon box */}
                <div
                  className="outlet-icon w-11 h-11 rounded-lg flex items-center justify-center text-white font-bold text-xs transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.18)",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  {outlet.abbr}
                </div>
                {/* Name */}
                <span className="outlet-label text-white text-[11px] font-medium text-center leading-tight transition-all duration-200">
                  {outlet.name}
                </span>
              </div>
            ))}
          </div>

          {/* Stats row */}
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 md:mb-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                // className="text-center rounded-2xl py-8 px-6">
                   className="text-center py-6 px-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-blue-300 text-xs">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Industry Recognition card — full width, centered */}
          <div
            className="w-full rounded-2xl p-8 md:p-10"
            style={{ background: "rgba(255,255,255,0.97)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {recognitions.map((rec) => (
                <div key={rec.title}>
                  <h4 className="font-bold text-gray-900 text-base mb-5">{rec.title}</h4>
                  <ul className="flex flex-col gap-3">
                    {rec.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm">
                        <span
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ background: idx === 0 ? "#3366FF" : idx === 1 ? "#22c55e" : "#f59e0b" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Bottom wave */}
      {/* <div className="w-full leading-[0]">
        <img src={newShape2} alt="" className="w-full block" />
      </div> */}

       

    </div>
  );
}
