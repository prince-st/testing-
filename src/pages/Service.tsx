
import { AboutHero, Exchanges, FAQ, Footer, Header, NewsNetworks,  Testimonials } from "@/components";
import MissionSection from "@/components/About/MissionSection";
import ServicesGrid from "@/components/About/ServicesGrid";

const Service = () => {
  return (
    <main>
      <Header />
      <AboutHero
        title="Disclosure service"
        subtitle="Distribute your company materials to directly to the capital markets and comply with global market regulators."
        showButton={true}
        buttonText="Request Pricing"
      />
      <ServicesGrid />
      <Exchanges />
      <NewsNetworks />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Service;
