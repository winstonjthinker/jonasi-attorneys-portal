// About page
import React from 'react';
import { MainLayout } from '@/components/layout';
import { SectionWrapper, SectionHeader, ImagePlaceholder } from '@/components/common';
import { NewsletterSection, ContactCtaSection } from '@/components/sections';
import { companyValues, stats, teamMembers } from '@/data/siteData';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Page Header */}
      <section className="relative py-20 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              About Us
            </span>
            <h1 className="heading-display text-primary-foreground mb-4">
              Your Trusted Legal Partner
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Learn about our firm's mission, values, and commitment to excellence in legal services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              subtitle="Our Mission"
              title="Excellence in Legal Services"
              align="left"
            />
            <p className="text-body text-muted-foreground mb-6">
              Jonasi Attorneys is a premier full-service law firm in Zimbabwe, providing trusted corporate, commercial, litigation, conveyancing and mining law services to local, regional and international clients.
            </p>
            <p className="text-body text-muted-foreground mb-6">
              Our lawyers combine deep legal expertise with practical industry knowledge to advise businesses, investors, institutions and individuals operating in Zimbabwe and across Africa. Through a collaborative, client-focused approach, we deliver clear, strategic and results-driven legal solutions tailored to our clients' objectives.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-muted rounded-sm">
                  <div className="text-2xl font-serif font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <ImagePlaceholder
              src="/media/about-mission.jpg"
              alt="Our Mission"
              className="w-full h-[500px] rounded-sm"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Vision Section */}
      <SectionWrapper background="muted">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ImagePlaceholder
              src="/media/about-vision.jpg"
              alt="Our Vision"
              className="w-full h-[500px] rounded-sm"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              subtitle="Our Vision"
              title="Leading the Way in Legal Excellence"
              align="left"
            />
            <p className="text-body text-muted-foreground mb-6">
              Our vision is to be recognised as a leading Zimbabwe law firm, known for excellence in corporate legal services, commercial transactions, litigation, property and mining law.
            </p>
            <p className="text-body text-muted-foreground mb-8">
              We are committed to building a firm defined by:
            </p>
            <ul className="space-y-3">
              {[
                'Superior legal expertise',
                'Efficient and responsive client service',
                'Strong commercial awareness',
                'Innovation in legal service delivery',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-body text-muted-foreground mt-6">
              By investing in our people, systems and technology, we aim to set the benchmark for professional legal services in Zimbabwe and beyond.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper background="navy">
        <SectionHeader
          subtitle="Our Values"
          title="What Guides Us"
          description="Our lawyers and professional staff are guided by a shared commitment to delivering exceptional legal services across all practice areas."
          light
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyValues.map((value, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm p-6 rounded-sm border border-primary-foreground/10"
            >
              <div className="w-12 h-12 rounded-sm bg-accent flex items-center justify-center mb-4">
                <span className="font-serif font-bold text-accent-foreground text-lg">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Leadership Preview */}
      <SectionWrapper>
        <SectionHeader
          subtitle="Leadership"
          title="Meet Our Partners"
          description="Our leadership team brings decades of experience and a shared commitment to client success."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <Link
              key={member.id}
              to={`/team/${member.slug}`}
              className="group bg-card rounded-sm shadow-subtle hover:shadow-strong transition-all overflow-hidden"
            >
              <ImagePlaceholder
                src={member.image}
                alt={member.name}
                className="w-full h-64"
              />
              <div className="p-6">
                <h3 className="heading-card mb-1">{member.name}</h3>
                <p className="text-accent font-medium text-sm">{member.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <NewsletterSection />
      <ContactCtaSection />
    </MainLayout>
  );
};

export default AboutPage;
