'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollMemory() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Manual mode for full control
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Unique key for THIS specific page/view
    const key = `scroll_${pathname}`;
    
    // 2. Aggressive Restore
    const saved = sessionStorage.getItem(key);
    if (saved) {
      const y = parseInt(saved);
      let count = 0;
      const restore = () => {
        window.scrollTo(0, y);
        if (count++ < 40) requestAnimationFrame(restore); // Stick for ~1.5s
      };
      restore();
      requestAnimationFrame(restore);
    }

    // 3. Constant Save
    const handleScroll = () => {
      if (window.scrollY > 0) {
        sessionStorage.setItem(key, window.scrollY.toString());
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      handleScroll();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return null;
}
