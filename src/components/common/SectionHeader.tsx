// Section header with title, subtitle, and accent line
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  align = 'center',
  light = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {subtitle && (
        <span
          className={cn(
            'text-sm font-semibold uppercase tracking-wider mb-3 block',
            light ? 'text-accent' : 'text-accent'
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          'heading-section',
          light ? 'text-primary-foreground' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          'accent-line mt-4 mb-4',
          align === 'center' && 'mx-auto'
        )}
      />
      {description && (
        <p
          className={cn(
            'text-body max-w-2xl',
            align === 'center' && 'mx-auto',
            light ? 'text-primary-foreground/80' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
