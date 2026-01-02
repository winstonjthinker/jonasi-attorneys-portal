// Section wrapper component with consistent spacing and animations
import React from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: 'default' | 'muted' | 'navy' | 'cream';
  animate?: boolean;
}

const backgroundClasses = {
  default: 'bg-background',
  muted: 'bg-muted',
  navy: 'bg-primary text-primary-foreground',
  cream: 'bg-cream-dark',
};

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  containerClassName,
  id,
  background = 'default',
  animate = true,
}) => {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        'section-padding',
        backgroundClasses[background],
        animate && 'transition-all duration-700',
        animate && (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'),
        className
      )}
    >
      <div className={cn('container-custom', containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
