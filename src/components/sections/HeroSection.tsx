// Hero section for homepage
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImagePlaceholder } from '@/components/common';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImagePlaceholder
          src="/media/hero-background.jpg"
          alt="Jonasi Attorneys Office"
          className="w-full h-full"
          showPath={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
            Premier Legal Services in Zimbabwe
          </span>
          
          <h1 className="heading-display text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Trusted Legal Excellence Built on Experience
          </h1>
          
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Jonasi Attorneys provides comprehensive legal services across corporate law, commercial litigation, mining law, and conveyancing. Our team of experienced practitioners delivers strategic, results-driven solutions tailored to your objectives.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/practice-areas">
                Our Practice Areas
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
