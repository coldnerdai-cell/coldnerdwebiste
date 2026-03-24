import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AnalyticsSection } from './components/AnalyticsSection';
import { PricingSection } from './components/PricingSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CampaignSection } from './components/CampaignSection';
import { FAQSection } from './components/FAQSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AnalyticsSection />
        <PricingSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <CampaignSection />
        <FAQSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
