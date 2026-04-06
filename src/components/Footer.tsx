import { useState } from "react";
import logoImg from "@/assets/logo.png";
import link1 from "@/assets/link1.png";
import link2 from "@/assets/link2.png";
import link3 from "@/assets/link3.png";
import newShape1 from "@/assets/new_shape_1.png";

const footerLinks = {
  Platforms: ["ACCESS PR", "ACCESS IR", "Media Database", "Analytics Dashboard"],
  Solutions: ["Press Release Distribution", "Media Monitoring", "Investor Relations", "Crisis Communications"],
  Resources: ["Help Center", "API Documentation", "Best Practices", "Webinars"],
  Company: ["About Us", "Careers", "Press Kit", "Contact"],
};

const bottomLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer>
      {/* Wave transition from light to dark */}
      <div className="w-full leading-[0]" style={{ background: "#0D1A5E" }}>
        <img src={newShape1} alt="" className="w-full block" />
      </div>

      {/* Dark navy body */}
      <div style={{ background: "#0d1a5e" }}>

        {/* Newsletter strip */}

        {/* <div className="fn-container pt-20 pb-12 mb- text-center"> */}
        |<div className="fn-container pt-20 pb-28 text-center">


          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 pt-20">
            Stay Updated with PR Insights
          </h3>
          <p className="text-sm mb-7 max-w-lg mx-auto leading-relaxed" style={{ color: "#fff" }}>
            Get the latest communications trends, best practices, and platform updates delivered to your inbox.
          </p>
          {submitted ? (
            <div className="inline-block bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white text-sm font-medium">
              Thank you for subscribing!
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) { setSubmitted(true); setEmail(""); } }}
              className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto rounded-lg overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.25)", boxShadow: "0 2px 16px rgba(0,0,0,0.2)" }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3.5 text-sm outline-none text-gray-800"
                style={{ background: "#fff", minWidth: 0 }}
              />
              <button
                type="submit"
                className="px-6 py-3.5 text-sm font-semibold text-white whitespace-nowrap transition-all hover:opacity-90"
                style={{ background: "#3366FF" }}
              >
                Subscribe
              </button>
              
            </form>
            
          )}
          <p className="text-xs mt-6 mb-20" style={{ color: "#fff" }}>No spam, unsubscribe at any time.</p>
        </div>

        {/* Divider */}
        {/* <div className="fn-container">
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
        </div> */}

    
        {/* Links grid */}
        <div className="fn-container py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={logoImg}
                  alt="FN Press Wire"
                  className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
                />

              </div>
              <p className="text-xs leading-relaxed mb-6" style={{ color: "#626D84" }}>
                Transforming how brands distribute news, pitch the media, and manage public relations with industry-leading communication platforms.
              </p>
              {/* Contact info */}
              <div className="flex flex-col gap-2 mb-5">
                <a href="mailto:hello@accesscommunications.com" className="flex items-center gap-2 text-xs hover:text-white transition-colors" style={{ color: "#626D84" }}>
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@accesscommunications.com
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-2 text-xs hover:text-white transition-colors" style={{ color: "#626D84" }}>
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (555) 123-4567
                </a>
                <span className="flex items-center gap-2 text-xs" style={{ color: "#626D84" }}>
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  San Francisco, CA
                </span>
              </div>
              {/* Social icons */}
              <div className="flex gap-2">
                {[link1, link2, link3].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                    style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <img src={icon} alt="" className="w-4 h-4 object-contain" style={{ filter: "brightness(0) invert(1)" }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-xs hover:text-white transition-colors" style={{ color: "#626D84" }}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="fn-container">

          <div className="w-full leading-[0] mt-10 mb-1" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

          <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-4 mb-15">
              {bottomLinks.map((link) => (
                <a key={link} href="#" className="text-xs hover:text-white transition-colors" style={{ color: "#626D84" }}>
                  {link}
                </a>
              ))}
            </div>
            <p className="text-xs" style={{ color: "#626D84" }}>
              © 2024 ACCESS Communications. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
