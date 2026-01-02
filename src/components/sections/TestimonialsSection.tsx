// Testimonials section
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionWrapper, SectionHeader } from '@/components/common';
import { testimonials } from '@/data/siteData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <SectionWrapper background="muted">
      <SectionHeader
        subtitle="Testimonials"
        title="What Our Clients Say"
        description="We take pride in the relationships we build with our clients and the results we achieve together."
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-sm shadow-medium p-8 md:p-12 relative">
          {/* Quote Icon */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8">
            <Quote className="w-12 h-12 text-accent/20" />
          </div>

          {/* Testimonial Content */}
          <div className="text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-serif italic">
              "{activeTestimonial.content}"
            </p>

            {/* Rating Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < activeTestimonial.rating ? 'text-accent' : 'text-muted'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Author Info */}
            <div>
              <h4 className="font-semibold text-foreground">{activeTestimonial.name}</h4>
              <p className="text-sm text-muted-foreground">
                {activeTestimonial.title}
                {activeTestimonial.company && `, ${activeTestimonial.company}`}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-accent w-6' : 'bg-border hover:bg-accent/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
