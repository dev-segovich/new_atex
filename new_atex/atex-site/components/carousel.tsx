'use client';

import { useEffect, useRef, useState } from 'react';

const imageList = [
  '/img/S1.webp', '/img/S2.webp', '/img/S3.webp', '/img/S4.webp', '/img/S5.webp',
  '/img/S6.webp', '/img/S7.webp', '/img/S8.webp', '/img/S9.webp', '/img/S10.webp',
  '/img/S11.webp', '/img/S12.webp', '/img/S13.webp', '/img/S14.webp', '/img/S15.webp',
];

const Carousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<HTMLElement[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const titleTimeout = useRef<NodeJS.Timeout | null>(null);
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);

  // Set slide positions
  useEffect(() => {
    const foundSlides = Array.from(
      trackRef.current?.querySelectorAll('.carousel-item') ?? []
    );
    setSlides(foundSlides as HTMLElement[]);

    const updateNav = () => {
      navRef.current?.querySelectorAll('.carousel-nav-line').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    };

    const setPositionByIndex = () => {
      const slideWidth = document.querySelector('.carousel')?.clientWidth || 0;
      const offset = -currentSlide * slideWidth;
      currentTranslate.current = offset;
      prevTranslate.current = offset;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offset}px)`;
      }

      slides.forEach((slide) =>
        slide.querySelector('.overlay')?.classList.remove('visible')
      );

      if (titleTimeout.current) clearTimeout(titleTimeout.current);
      titleTimeout.current = setTimeout(() => {
        const current = slides[currentSlide];
        current?.querySelector('.overlay')?.classList.add('visible');
      }, 1000);

      updateNav();
    };

    window.addEventListener('resize', setPositionByIndex);
    setPositionByIndex();

    return () => window.removeEventListener('resize', setPositionByIndex);
  }, [currentSlide]);

  // Auto Slide Logic
  useEffect(() => {
    if (!isPaused) {
      autoSlideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % imageList.length);
      }, 3000);
    }

    return () => {
      if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    };
  }, [isPaused]);

  const goToSlide = (index: number) => setCurrentSlide(index);

  const getPositionX = (e: TouchEvent | MouseEvent) =>
    'touches' in e ? e.touches[0].clientX : e.clientX;

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    isDragging.current = true;
    startX.current = getPositionX(e.nativeEvent);

    document.addEventListener('mousemove', handleTouchMove);
    document.addEventListener('mouseup', handleTouchEnd);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchMove = (e: TouchEvent | MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const currentPosition = getPositionX(e);
    currentTranslate.current = prevTranslate.current + currentPosition - startX.current;
    trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    const movedBy = currentTranslate.current - prevTranslate.current;

    if (movedBy < -100 && currentSlide < slides.length - 1) setCurrentSlide((p) => p + 1);
    else if (movedBy > 100 && currentSlide > 0) setCurrentSlide((p) => p - 1);
    else setCurrentSlide((p) => p);

    document.removeEventListener('mousemove', handleTouchMove);
    document.removeEventListener('mouseup', handleTouchEnd);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  return (
    <section className="carousel-section relative">
      <div className="carousel">
        <div
          className="carousel-track"
          ref={trackRef}
          onMouseDown={handleTouchStart}
          onTouchStart={handleTouchStart}
        >
          {imageList.map((src, i) => (
            <div
              key={i}
              className="carousel-item"
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
  
        {/* Contenedor para nav y botón */}
        <div className="flex flex-col items-center mt-4 gap-5">
          <div className="carousel-nav" ref={navRef}>
            {imageList.map((_, i) => (
              <div
                key={i}
                className={`carousel-nav-line ${i === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
  
          {/* Botón centrado debajo de los dots */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="bg-[#364350] text-white px-5 py-2 rounded-full shadow hover:bg-[#2e3a44] transition text-sm"
          >
            {isPaused ? '▶ Resume' : '❚❚ Pause'}
          </button>
        </div>
      </div>
    </section>
  );
  
};

export default Carousel;
