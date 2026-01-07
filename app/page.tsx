
import AppShowcase from "./components/home/app-showcase";
import FAQSection from "./components/home/FAQ";
import Hero from "./components/home/hero";
import SafetySection from "./components/home/safety";
import Services from "./components/home/services";


export default function Home() {
  return (
   <div>
    <Hero />
    <AppShowcase />
    <Services />
    <SafetySection />
    <FAQSection />
   </div>
  );
}
