import HeroSwiper from '@/components/HeroSwiper';
import CoursesSection from '@/components/sections/CoursesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import AboutSection from '@/components/sections/AboutSection';
import AdmissionSection from '@/components/sections/AdmissionSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSwiper />
      <CoursesSection />
      <WhyChooseUsSection />
      <AboutSection />
      <AdmissionSection />
    </div>
  );
};

export default Home;