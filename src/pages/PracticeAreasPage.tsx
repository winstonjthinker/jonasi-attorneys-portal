// Practice Areas page
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Mountain, Building2, Home, Users, Lightbulb, Shield, Globe } from 'lucide-react';
import { MainLayout } from '@/components/layout';
import { SectionWrapper, SectionHeader, ImagePlaceholder } from '@/components/common';
import { NewsletterSection, ContactCtaSection } from '@/components/sections';
import { practiceAreas } from '@/data/siteData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  Mountain,
  Building2,
  Home,
  Users,
  Lightbulb,
  Shield,
  Globe,
};

const PracticeAreasPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Page Header */}
      <section className="relative py-20 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Practice Areas
            </span>
            <h1 className="heading-display text-primary-foreground mb-4">
              Comprehensive Legal Services
            </h1>
            <p className="text-lg text-primary-foreground/80">
              We offer expert legal services across multiple practice areas to meet all your legal needs.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <SectionWrapper>
        <div className="space-y-16">
          {practiceAreas.map((area, index) => {
            const IconComponent = iconMap[area.icon] || Scale;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={area.slug}
                id={area.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                  <ImagePlaceholder
                    src={area.image}
                    alt={area.title}
                    className="w-full h-80 rounded-sm"
                  />
                </div>
                
                <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                  <div className="w-14 h-14 rounded-sm bg-accent/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="heading-section mb-4">{area.title}</h2>
                  <p className="text-body text-muted-foreground mb-4">
                    {area.description}
                  </p>
                  <p className="text-body text-muted-foreground mb-6">
                    {area.details}
                  </p>
                  <Link
                    to={`/contact?area=${area.slug}`}
                    className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                  >
                    Discuss Your Case
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <NewsletterSection />
      <ContactCtaSection />
    </MainLayout>
  );
};

export default PracticeAreasPage;
