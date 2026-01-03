// Section wrapper component with consistent spacing
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: 'default' | 'muted' | 'dark' | 'accent';
}

const backgroundClasses = {
  default: 'bg-background',
  muted: 'bg-muted',
  dark: 'bg-primary text-primary-foreground',
  accent: 'bg-accent/10',
};

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  containerClassName,
  id,
  background = 'default',
}) => {
  return (
    <section
      id={id}
      className={cn(
        'section-padding',
        backgroundClasses[background],
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
