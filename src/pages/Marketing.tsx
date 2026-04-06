
import {
  AboutHero,
  FAQ,
  Footer,
  Header,
  MarketingSection,
  NewsNetworks,
} from "@/components";

const Marketing = () => {
  return (
    <main>
      <Header />
      <AboutHero
        title="Global Media & Marketing Solutions"
        subtitle="From instant worldwide press release distribution to centralized media hubs, digital advertising, and SEO-driven content marketing — our integrated solutions ensure your brand reaches the right audience, at the right time, across the globe."
        showButton={true}
        buttonText="Contact Us Now"
      />
      <MarketingSection
        title="Press Releases"
        description="Our network partners across the globe enable your press releases to reach the heart of the newsroom and online media within seconds of dispatch."
        image="/src/assets/image 15.png"
        imagePosition="left"
      />
      <MarketingSection
        title="Media Website"
        description="Keep your company media materials centralized for journalists, research analysts, and investors to quickly and easily retrieve the information they want."
        image="/src/assets/image 16.png"
        imagePosition="right"
      />
      <MarketingSection
        title="SEO & Content Marketing"
        description="Syndicate your SEC or other messaging via our online news network and let us help create a customized content marketing program. Publish your news content globally online and optimize your company SEO strategy."
        image="/src/assets/image 17.png"
        imagePosition="left"
      />
      <MarketingSection
        title="Media Website"
        description="Utilize our dedicated team of network agencies to help build your brand. These certified Google and Bing accredited professionals can co-manage your online advertising, so you can focus on what you do best."
        image="/src/assets/image 18.png"
        imagePosition="right"
      />
      <NewsNetworks />
      <FAQ />
   
      <Footer />
    </main>
  );
};

export default Marketing;
