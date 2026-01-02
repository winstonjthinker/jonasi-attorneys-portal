// Team page
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import { MainLayout } from '@/components/layout';
import { SectionWrapper, SectionHeader, ImagePlaceholder } from '@/components/common';
import { NewsletterSection, ContactCtaSection } from '@/components/sections';
import { teamMembers } from '@/data/siteData';

const TeamPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Page Header */}
      <section className="relative py-20 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Our Team
            </span>
            <h1 className="heading-display text-primary-foreground mb-4">
              Meet Our Legal Experts
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Our attorneys bring decades of combined experience and a commitment to excellence in every case.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <SectionWrapper>
        <div className="space-y-20">
          {teamMembers.map((member, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={member.id}
                id={member.slug}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                  <ImagePlaceholder
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[500px] rounded-sm"
                  />
                </div>
                
                <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
                    {member.role}
                  </span>
                  <h2 className="heading-section mb-2">{member.name}</h2>
                  <p className="text-accent font-medium mb-4">{member.title}</p>
                  
                  {/* Bio */}
                  <div className="text-body text-muted-foreground space-y-4 mb-6">
                    {member.bio.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                  
                  {/* Areas of Practice */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3">Areas of Practice</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {member.areasOfPractice.map((area, aIndex) => (
                        <li key={aIndex} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Contact */}
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-sm font-medium hover:bg-gold-light transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Contact {member.name.split(' ')[0]}
                  </a>
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

export default TeamPage;
