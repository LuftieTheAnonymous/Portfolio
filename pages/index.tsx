import HeroSection from '@/assets/sections/HeroSection';
import LanguageSection from '@/assets/sections/LanguageSection';
import Projects from '@/assets/sections/Projects';
import TechSection from '@/assets/sections/TechSection';
import SocialMedia from '@/assets/sections/SocialMedia';
import FAQSection from '@/assets/sections/FAQSection';


export default function Home() {
  return (
    <div className="w-screen h-screen">
       <HeroSection />
       {/* <TechSection/> */}
      <Projects />
      {/* <LanguageSection/>
      <FAQSection/>
      <SocialMedia/> */}
      </div>
  );
}
