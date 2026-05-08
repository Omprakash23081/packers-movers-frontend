'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Save scroll position before leaving the page
    const handleScroll = () => {
      sessionStorage.setItem(`scrollPos:${pathname}`, window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    // Restore scroll position on mount
    const savedPos = sessionStorage.getItem(`scrollPos:${pathname}`);
    if (savedPos) {
      // Use a small timeout to ensure the DOM has rendered and animations started
      const timeoutId = setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedPos),
          behavior: 'instant', // Use instant to avoid weird jumping during load
        });
      }, 100); // 100ms is usually enough for Next.js to mount the page
      
      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  return null;
}
