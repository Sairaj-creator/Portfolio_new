import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const observeNewElements = () => {
      const revealEls = document.querySelectorAll('[data-reveal]:not(.is-visible)');
      revealEls.forEach((el) => io.observe(el));
    };

    observeNewElements();

    // Set up a MutationObserver to watch for new elements added to the DOM
    // This replicates the setTimeout hack in the original script but is more robust for React
    const observer = new MutationObserver(() => {
      observeNewElements();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      io.disconnect();
    };
  }, []);
}
