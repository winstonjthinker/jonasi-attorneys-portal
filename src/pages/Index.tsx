// Homepage
import React from 'react';
import { MainLayout } from '@/components/layout';
import {
  HeroSection,
  AboutPreviewSection,
  PracticeAreasSection,
  TeamPreviewSection,
  WhyChooseUsSection,
  TestimonialsSection,
  NewsletterSection,
  ContactCtaSection,
} from '@/components/sections';

const Index: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutPreviewSection />
      <PracticeAreasSection />
      <WhyChooseUsSection />
      <TeamPreviewSection />
      <TestimonialsSection />
      <NewsletterSection />
      <ContactCtaSection />
    </MainLayout>
  );
};

export default Index;
