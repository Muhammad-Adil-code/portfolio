import { useEffect, useState, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

export const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  options: IntersectionObserverOptions = {}
) => {
  const { 
    root = null, 
    rootMargin = '0px', 
    threshold = 0.1,
    once = true 
  } = options;
  
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef?.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        // If the element has intersected and the once option is true,
        // unobserve the element
        if (entry.isIntersecting && once) {
          observer.unobserve(element);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, root, rootMargin, threshold, once]);

  return isIntersecting;
};