import React from 'react';
import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  src?: string; // Made optional
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide' | 'auto';
  showPath?: boolean;
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[21/9]',
  auto: '',
};

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  className,
  aspectRatio = 'auto',
  showPath = true,
}) => {
  // If src exists, render the actual image
  if (src) {
    return (
      <div className={cn('overflow-hidden', aspectRatioClasses[aspectRatio], className)}>
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-contain" 
          onError={(e) => {
            // Optional: fallback if image fails to load
            console.error("Failed to load image at:", src);
          }}
        />
      </div>
    );
  }

  // Fallback: The original placeholder UI if no src is provided
  return (
    <div
      className={cn(
        'image-placeholder rounded-sm overflow-hidden bg-muted',
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      <div className="flex flex-col items-center justify-center p-4 text-center h-full w-full">
        <div className="w-12 h-12 mb-3 rounded bg-border flex items-center justify-center">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <span className="text-sm font-medium text-muted-foreground mb-1">{alt}</span>
        {showPath && <span className="text-xs text-muted-foreground/70 font-mono italic">No image source found</span>}
      </div>
    </div>
  );
};

export default ImagePlaceholder;