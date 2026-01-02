// Practice Areas section
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Mountain, Building2, Home, Users, Lightbulb, Shield, Globe } from 'lucide-react';
import { SectionWrapper, SectionHeader } from '@/components/common';
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

export const PracticeAreasSection: React.FC = () => {
  return (
    <SectionWrapper background="muted">
      <SectionHeader
        subtitle="What We Do"
        title="Our Practice Areas"
        description="We offer comprehensive legal services across multiple practice areas, serving clients with expertise and dedication."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {practiceAreas.map((area) => {
          const IconComponent = iconMap[area.icon] || Scale;
          
          return (
            <Link
              key={area.slug}
              to={`/practice-areas/${area.slug}`}
              className="group bg-card p-6 rounded-sm shadow-subtle hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-sm bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <IconComponent className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              
              <h3 className="heading-card text-lg mb-2 group-hover:text-accent transition-colors">
                {area.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {area.description}
              </p>
              
              <span className="inline-flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </span>
            </Link>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default PracticeAreasSection;
