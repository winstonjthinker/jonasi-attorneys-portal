// Contact CTA section
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionWrapper, ImagePlaceholder } from '@/components/common';
import { companyInfo } from '@/data/siteData';

export const ContactCtaSection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImagePlaceholder
          src="/media/contact-cta-background.jpg"
          alt="Contact Jonasi Attorneys"
          className="w-full h-full"
          showPath={false}
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section text-primary-foreground mb-6">
            Ready to Discuss Your Legal Needs?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our experienced attorneys are ready to help you navigate your legal challenges. Schedule a confidential consultation today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg font-medium">{companyInfo.phone}</span>
            </a>
          </div>

          <p className="text-sm text-primary-foreground/60">
            Initial consultation • Confidential • No obligation
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCtaSection;
