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
  scaleEffect = true,
  rotateEffect = false,
  blurEffect = false,
}: ParallaxSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      // Use requestAnimationFrame for smoother animations
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }

      animationFrameId.current = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const sectionTop = sectionRef.current!.offsetTop;
        const sectionHeight = sectionRef.current!.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress through the section (0 to 1)
        let progress = (scrollY - sectionTop + windowHeight) / (windowHeight + sectionHeight);
        progress = Math.max(0, Math.min(1, progress));
        
        // Enhanced parallax effect with direction detection
        const scrollDirection = scrollY > lastScrollY.current ? 1 : -1;
        lastScrollY.current = scrollY;
        
        // Apply multiple effects based on props
        const translateY = (1 - progress) * (150 * speed * scrollDirection);
        const scale = scaleEffect ? 0.95 + (progress * 0.1) : 1;
        const rotate = rotateEffect ? (progress - 0.5) * 2 : 0;
        // Only apply blur if blurEffect is explicitly true
        const blur = blurEffect ? Math.min(5 * (1 - progress), 5) : 0;
        const opacity = fadeIn ? progress : 1;
        
        // Reset filter if blur is not enabled
        if (!blurEffect) {
          sectionRef.current!.style.filter = 'none';
        }
        
        sectionRef.current!.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`;
        sectionRef.current!.style.opacity = `${opacity}`;
        // Only apply blur if blurEffect is explicitly true
        if (blurEffect) {
          sectionRef.current!.style.filter = `blur(${blur}px)`;
        }
      });
    };

    // Add passive scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [inView, speed, fadeIn, scaleEffect, rotateEffect, blurEffect]);

  return (
    <div 
      ref={(node) => {
        // @ts-ignore - This is a workaround for multiple refs
        ref(node);
        // @ts-ignore
        sectionRef.current = node;
      }}
      className={cn(
        'will-change-transform transition-all duration-1000 ease-out',
        'transform-gpu', // Force hardware acceleration
        {
          'opacity-0': fadeIn && !isVisible,
          'opacity-100': fadeIn && isVisible,
        },
        className
      )}
      id={id}
    >
      {children}
    </div>
  );
}
