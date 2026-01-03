// About preview section for homepage
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionWrapper, SectionHeader, ImagePlaceholder } from '@/components/common';
import { stats } from '@/data/siteData';

const highlights = [
  'Over 200 successful court representations',
  'Full-service corporate and commercial practice',
  'Deep expertise in mining and extractive industries',
  'Strategic, results-driven legal solutions',
];

export const AboutPreviewSection: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="relative z-10">
            <ImagePlaceholder
              src="/media/about-office.jpg"
              alt="Jonasi Attorneys Office"
              className="w-full h-[400px] lg:h-[500px] rounded-sm"
              aspectRatio="auto"
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-accent/20 rounded-sm -z-10" />
          
          {/* Stats overlay */}
          <div className="absolute -bottom-8 left-8 right-8 bg-card shadow-strong rounded-sm p-6 z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-serif font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:pl-8 pt-12 lg:pt-0">
          <SectionHeader
            subtitle="About Our Firm"
            title="A Premier Full-Service Law Firm"
            align="left"
          />
          
          <p className="text-body text-muted-foreground mb-6">
            Jonasi Attorneys is a premier full-service law firm in Zimbabwe, providing trusted corporate, commercial, litigation, conveyancing and mining law services to local, regional and international clients.
          </p>
          
          <p className="text-body text-muted-foreground mb-8">
            Our lawyers combine deep legal expertise with practical industry knowledge to advise businesses, investors, institutions and individuals operating in Zimbabwe and across Africa.
          </p>

          {/* Highlights */}
          <ul className="space-y-3 mb-8">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <Button variant="accent" asChild>
            <Link to="/about">
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutPreviewSection;
