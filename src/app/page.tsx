import Image from 'next/image';
import dynamic from 'next/dynamic';
import HeroForm from '../components/home/HeroForm';
import HeroContent from '../components/home/HeroContent';

const ServiceCards = dynamic(() => import('@/components/home/ServiceCards'));
const AboutUs = dynamic(() => import('@/components/home/AboutUs'));
const Gallery = dynamic(() => import('@/components/home/Gallery'));
const Stats = dynamic(() => import('@/components/home/Stats'));
const ReviewsWidget = dynamic(() => import('@/components/home/ReviewsWidget'));
const GoogleReviews = dynamic(() => import('@/components/home/GoogleReviews'));
const VisualProof = dynamic(() => import('@/components/home/VisualProof'));
const FAQ = dynamic(() => import('@/components/home/FAQ'));
const ConnectWithUs = dynamic(() => import('@/components/home/ConnectWithUs'));
const VideoTestimonials = dynamic(() => import('@/components/home/VideoTestimonials'));
const PricingGuide = dynamic(() => import('@/components/home/PricingGuide'));
const LocationGrid = dynamic(() => import('@/components/home/LocationGrid'));
const CostCalculator = dynamic(() => import('@/components/home/CostCalculator'));
const WhyChooseUs = dynamic(() => import('@/components/home/WhyChooseUs'));
const ProcessFlow = dynamic(() => import('@/components/home/ProcessFlow'));


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-88px)] flex items-center py-16 md:py-24 lg:py-0 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          {/* Abstract mesh and image background */}
          <Image
            src="/images/h3ero-bg.png"
            alt="Sunita Cargo Packers and Movers Background"
            fill
            sizes="100vw"
            className="object-cover object-[70%_center] md:object-center opacity-100 dark:opacity-80 pointer-events-none transition-opacity duration-700"
            priority
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent dark:from-background/95 dark:via-background/70 dark:to-transparent" />
          <div className="absolute inset-0 bg-gradient-mesh opacity-10 dark:opacity-20" />
          <div className="absolute top-0 w-full h-full bg-grid-black/[0.03] dark:bg-grid-white/[0.03]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <HeroContent />
            <div className="hidden lg:block">
              <HeroForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-only form before calculator */}
      <div className="lg:hidden w-full px-0 -mt-12 mb-8 relative z-20">
        <div className="mobile-95-container">
          <HeroForm />
        </div>
      </div>


      <CostCalculator />
      <ServiceCards />
      <WhyChooseUs />
      <PricingGuide />
      <ConnectWithUs />
      <ProcessFlow />
      <AboutUs />
      <GoogleReviews />
      <Stats />
      <Gallery />
      <VisualProof />
      <ReviewsWidget />
      <VideoTestimonials />
      <LocationGrid />
      <FAQ />

    </div>
  );
}

