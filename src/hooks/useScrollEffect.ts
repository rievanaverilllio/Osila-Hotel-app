import { useEffect, useState } from 'react';

/**
 * Hook to track window scroll and derive a boolean when threshold is crossed.
 * thresholdVh is a multiplier of viewport height, e.g. 0.6 for 60% of viewport.
 * Optimized to work with Lenis smooth scrolling.
 */
export function useScrollEffect(thresholdVh: number = 0.6) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrollY(y);
          const heroHeight = window.innerHeight * thresholdVh;
          setIsScrolled(y > heroHeight);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll(); // initialize
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [thresholdVh]);

  return { scrollY, isScrolled } as const;
}
