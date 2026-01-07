
import AppShowcase from "./components/home/app-showcase";
import FAQSection from "./components/home/FAQ";
import Hero from "./components/home/hero";
import SafetySection from "./components/home/safety";
import Services from "./components/home/services";
import ProGalleryMarquee from "./components/home/wall-of-masters";


export default function Home() {
  return (
   <div className="w-full overflow-x-hidden">
    <Hero />
    <AppShowcase />
    <ProGalleryMarquee />
    <Services />
    <SafetySection />
    <FAQSection />
   </div>
  );
}
