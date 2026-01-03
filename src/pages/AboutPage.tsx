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

      {/* About Section */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              subtitle="Who We Are"
              title="A Full-Service Law Firm"
              align="left"
            />
            <p className="text-body text-muted-foreground mb-6">
              Jonasi Attorneys is a full-service law firm in Zimbabwe, providing strategic legal advice and representation to corporate entities, investors, institutions, and private clients across a wide range of practice areas.
            </p>
            <p className="text-body text-muted-foreground mb-6">
              We are known for our strong expertise in commercial and corporate litigation, mining law, corporate transactions, conveyancing, advisory and deal structuring, insurance law, labour and employment law, and regulatory compliance. Our lawyers combine technical legal excellence with practical, business-focused insight to deliver solutions that are commercially sound and legally robust.
            </p>
            <p className="text-body text-muted-foreground mb-6">
              The firm is led by experienced practitioners with a proven track record before all levels of Zimbabwean courts, including the Magistrates' Court, High Court, Supreme Court, and Constitutional Court. We routinely act on complex and high-value matters involving mining projects, property developments, corporate restructurings, commercial disputes, employment matters, and cross-border transactions.
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
              src="/media/about-office.jpg"
              alt="Jonasi Attorneys Office"
              className="w-full h-[500px] rounded-sm"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Client Approach Section */}
      <SectionWrapper background="muted">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ImagePlaceholder
              src="/media/about-team.jpg"
              alt="Our Team"
              className="w-full h-[500px] rounded-sm"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              subtitle="Our Approach"
              title="Client-Centred Legal Services"
              align="left"
            />
            <p className="text-body text-muted-foreground mb-6">
              At Jonasi Attorneys, we pride ourselves on a client-centred approach. We take the time to understand our clients' objectives, industries, and risk environments, enabling us to provide clear, practical, and timely legal advice.
            </p>
            <p className="text-body text-muted-foreground mb-6">
              Our work is grounded in integrity, professionalism, and a commitment to delivering measurable value.
            </p>
            <p className="text-body text-muted-foreground mb-8">
              With a collaborative team and a forward-looking mindset, Jonasi Attorneys is well positioned to support clients operating in Zimbabwe's evolving legal and commercial landscape, as well as those with regional and international interests.
            </p>
            <ul className="space-y-3">
              {[
                'Strategic legal advice tailored to your objectives',
                'Deep understanding of industry-specific challenges',
                'Proven track record across all court levels',
                'Commitment to integrity and professionalism',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper background="dark">
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

      {/* Team Preview */}
      <SectionWrapper>
        <SectionHeader
          subtitle="Our Team"
          title="Meet Our Legal Experts"
          description="Our team brings decades of experience and a shared commitment to client success."
        />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                <h3 className="heading-card text-lg mb-1">{member.name}</h3>
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
