import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
}

const HeroSwiper = () => {
  const slides: HeroSlide[] = [
    {
      id: 1,
      title: "Welcome to Vidhyadham Educational Trust",
      subtitle: "Excellence in Business Education",
      description: "Empowering students with quality education, industry exposure, and placement assistance for a successful career.",
      image: "/hero.png",
      cta: "Explore Programs"
    },
    {
      id: 2,
      title: "Student Credit Card Available",
      subtitle: "Financial Support for Your Dreams",
      description: "Get easy access to educational loans through our student credit card program with simplified procedures.",
      image: "hero2.png",
      cta: "Apply Now"
    },
    {
      id: 3,
      title: "100% Placement Assistance",
      subtitle: "Your Career, Our Commitment",
      description: "Dedicated placement cell ensures every student gets the right opportunity to kickstart their professional journey.",
      image: "/hero3.png",
      cta: "View Placements"
    },
    {
      id: 4,
      title: "Modern Infrastructure",
      subtitle: "State-of-the-Art Learning Environment",
      description: "Experience learning in our modern classrooms, well-equipped labs, and comfortable campus facilities.",
      image: "/hero4.png",
      cta: "Virtual Tour"
    }
  ];

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active bg-primary',
          bulletClass: 'swiper-pagination-bullet bg-white/50',
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 hero-gradient opacity-20" />
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container-custom">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="max-w-3xl text-white"
                  >
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                      className="text-secondary text-lg font-semibold mb-4"
                    >
                      {slide.subtitle}
                    </motion.p>
                    
                    <motion.h1
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                      className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
                      className="text-xl mb-8 text-white/90 max-w-2xl"
                    >
                      {slide.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
                    >
                      <Button
                        size="lg"
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold rounded-full shadow-glow"
                      >
                        {slide.cta}
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom pagination styles */}
      <style>{`
        .swiper-pagination {
          bottom: 30px !important;
        }
        
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-bullet-active {
          transform: scale(1.2) !important;
        }
      `}</style>
    </div>
  );
};

export default HeroSwiper;