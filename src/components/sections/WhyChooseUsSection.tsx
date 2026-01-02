// Why Choose Us / Values section
import React from 'react';
import { SectionWrapper, SectionHeader, ImagePlaceholder } from '@/components/common';
import { companyValues } from '@/data/siteData';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <SectionWrapper background="navy">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Side */}
        <div>
          <SectionHeader
            subtitle="Why Choose Us"
            title="Committed to Your Success"
            description="Our lawyers and professional staff are guided by a shared commitment to delivering exceptional legal services across all practice areas."
            align="left"
            light
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {companyValues.map((value, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 rounded-sm bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="font-serif font-bold text-accent-foreground text-lg">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-primary-foreground mb-1">
                    {value.title}
                  </h4>
                  <p className="text-sm text-primary-foreground/70">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Side */}
        <div className="relative">
          <ImagePlaceholder
            src="/media/why-choose-us.jpg"
            alt="Legal team at work"
            className="w-full h-[500px] rounded-sm"
          />
          <div className="absolute inset-0 border-2 border-accent rounded-sm transform translate-x-4 translate-y-4 -z-10" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUsSection;
