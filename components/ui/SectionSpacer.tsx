import { cn } from '@/lib/utils';

interface SectionSpacerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function SectionSpacer({ size = 'lg', className }: SectionSpacerProps) {
  return (
    <div 
      className={cn(
        'w-full',
        {
          'h-16 md:h-24': size === 'sm',
          'h-24 md:h-32': size === 'md',
          'h-32 md:h-48': size === 'lg',
          'h-48 md:h-64': size === 'xl',
        },
        className
      )} 
    />
  );
}
