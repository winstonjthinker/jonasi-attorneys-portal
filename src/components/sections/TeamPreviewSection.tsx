// Team preview section for homepage
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionWrapper, SectionHeader, ImagePlaceholder } from '@/components/common';
import { teamMembers } from '@/data/siteData';

export const TeamPreviewSection: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionHeader
        subtitle="Our Team"
        title="Meet Our Legal Experts"
        description="Our attorneys bring decades of combined experience and a commitment to excellence in every case."
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group bg-card rounded-sm shadow-subtle hover:shadow-strong transition-all duration-300 overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <ImagePlaceholder
                src={member.image}
                alt={member.name}
                className="w-full h-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover overlay with email */}
              <a
                href={`mailto:${member.email}`}
                className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3 rounded-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Contact {member.name.split(' ')[0]}
              </a>
            </div>
            
            <div className="p-6">
              <h3 className="heading-card mb-1">{member.name}</h3>
              <p className="text-accent font-medium text-sm mb-3">{member.title}</p>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {member.bio.split('\n')[0]}
              </p>
              
              <Link
                to={`/team/${member.slug}`}
                className="inline-flex items-center text-sm font-medium text-accent mt-4 hover:gap-2 transition-all"
              >
                View Profile
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="navyOutline" asChild>
          <Link to="/team">
            Meet Our Full Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default TeamPreviewSection;
