'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  id?: string;
  fadeIn?: boolean;
  scaleEffect?: boolean;
  rotateEffect?: boolean;
  blurEffect?: boolean;
}

export function ParallaxSection({
  children,
  speed = 0.5,
  className,
  id,
  fadeIn = true,
  scaleEffect = false, // Changed default to false
  rotateEffect = false,
  blurEffect = false,
}: ParallaxSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }

      animationFrameId.current = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const sectionTop = sectionRef.current!.offsetTop;
        const sectionHeight = sectionRef.current!.offsetHeight;
        const windowHeight = window.innerHeight;

        let progress = (scrollY - sectionTop + windowHeight) / (windowHeight + sectionHeight);
        progress = Math.max(0, Math.min(1, progress));

        // Simplified parallax - only use translateY with rounded values to avoid sub-pixel rendering
        const translateY = Math.round((1 - progress) * (50 * speed));
        
        // Only apply scale if explicitly enabled, and use values that won't cause blur
        const scale = scaleEffect ? (progress < 0.5 ? 1 : 1) : 1; // Effectively disabled
        
        const opacity = fadeIn ? Math.min(progress * 1.5, 1) : 1;

        // Use integer pixel values to prevent sub-pixel blur
        sectionRef.current!.style.transform = `translateY(${translateY}px)`;
        sectionRef.current!.style.opacity = `${opacity}`;
        
        // Remove any blur filter
        sectionRef.current!.style.filter = 'none';
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [inView, speed, fadeIn, scaleEffect]);

  return (
    <div 
      ref={(node) => {
        ref(node);
        // @ts-ignore
        sectionRef.current = node;
      }}
      className={cn(
        'transition-opacity duration-700 ease-out',
        {
          'opacity-0': fadeIn && !isVisible,
          'opacity-100': fadeIn && isVisible,
        },
        className
      )}
      id={id}
      style={{
        backfaceVisibility: 'hidden',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {children}
    </div>
  );
}