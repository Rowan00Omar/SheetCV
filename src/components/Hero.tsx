
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useSheetData } from '../hooks/useSheetData'; // hook you already built

interface HeroProps {
  heroGid: string;        // gid for hero sheet
  sliderGid: string;      // gid for hero slider sheet
  language: string;       // "en" | "ar"
}

const carouselVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '50%' : '-50%',
    opacity: 0,
    scale: 0.95,
  }),
  center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '50%' : '-50%',
    opacity: 0,
    scale: 0.95,
  }),
};

const Hero: React.FC<HeroProps> = ({ heroGid, sliderGid, language }) => {
  const { data: heroData, loading: loadingHero } = useSheetData(heroGid);
  const { data: sliderData, loading: loadingSlider } = useSheetData(sliderGid);

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [[page, direction], setPage] = useState([0, 0]);
  const [paused, setPaused] = useState(false);


  const galleryImages = sliderData
    .sort((a, b) => (parseInt(a.Order) || 0) - (parseInt(b.Order) || 0))
    .map((item) => 'images/' + item.ImageUrl);


  const IMAGES_PER_SLIDE = 6;
  const pageCount = Math.ceil(galleryImages.length / IMAGES_PER_SLIDE);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (pageCount <= 1) return; // nothing to scroll

    const interval = setInterval(() => {
      setPage(([prevPage]) => [prevPage + 1, 1]); // always increment page
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, [pageCount]); // only depends on pageCount, not page


  const pageIndex = pageCount > 0 ? ((page % pageCount) + pageCount) % pageCount : 0;
  const startIndex = pageIndex * IMAGES_PER_SLIDE;
  const currentImages = galleryImages.slice(startIndex, startIndex + IMAGES_PER_SLIDE);

  if (loadingHero || loadingSlider) return <p></p>; / * Loading...*/

  const hero = heroData[0]; // Only one row per language

  if (!hero) return null;

  return (
    <section id="home" className = "h-screen w-full flex flex-col items-center justify-center relative bg-base-300 -mt-20 pt-20" >
      {/* Collage images */ }
      < div className = "w-full flex-grow relative flex items-center justify-center container mx-auto px-4" >
        <div className="relative w-full max-w-7xl mx-auto" >
          <div className="overflow-hidden relative min-h-[50vh] md:min-h-[60vh] max-h-[600px]" >
            <AnimatePresence initial={ false } custom = { direction } >
              <motion.div
                key={ page }
  className = "absolute w-full h-full top-0 left-0"
  custom = { direction }
  variants = { carouselVariants }
  initial = "enter"
  animate = "center"
  exit = "exit"
  transition = {{
    x: { type: 'spring', stiffness: 250, damping: 30 },
    opacity: { duration: 0.4 },
  }
}
              >
  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full h-full" >
  {
    currentImages.map((src, i) => (
      <motion.div
                      key= { i }
                      className = "rounded-lg shadow-lg overflow-hidden cursor-pointer"
                      whileHover = {{ scale: 1.05 }}
onClick = {() => setSelectedImage(startIndex + i)}
                    >
  <img src={ src } alt = {`Slide ${i}`} className = "w-full h-full object-cover object-top" />
    </motion.div>
                  ))}
</div>
  < div className = "absolute z-30 inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" > </div>

    </motion.div>
    </AnimatePresence>
    </div>

{
  pageCount > 1 && (
    <>
    <motion.button
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-50 btn btn-circle btn-ghost"
  onClick = {() => paginate(-1)
}
initial = {{ opacity: 0, x: -30 }}
animate = {{ opacity: 1, x: 0 }}
exit = {{ opacity: 0, x: -30 }}
transition = {{ duration: 0.4 }}
              >
                &#10094;
</motion.button>
  < motion.button
className = "absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-50 btn btn-circle btn-ghost"
onClick = {() => paginate(1)}
initial = {{ opacity: 0, x: 30 }}
animate = {{ opacity: 1, x: 0 }}
exit = {{ opacity: 0, x: 30 }}
transition = {{ duration: 0.4 }}
              >
                &#10095;
</motion.button>
  </>
          )}
</div>
  </div>

{/* Hero text */ }
<div className="absolute z-40 inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4" >
  <motion.h1
          className="text-3xl md:text-5xl font-bold"
initial = {{ opacity: 0, y: 20 }}
animate = {{ opacity: 1, y: 0 }}
transition = {{ duration: 1 }}
        >
  { hero.Title }
  </motion.h1>
  < motion.p
className = "mt-4 text-lg md:text-2xl max-w-2xl"
initial = {{ opacity: 0 }}
animate = {{ opacity: 1 }}
transition = {{ duration: 1, delay: 0.3 }}
        >
  { hero.Tagline }
  </motion.p>
  < div className = "mt-6 flex gap-4" >
    { hero.CTA1 && <a href="#contact" className = "btn btn-primary" > { hero.CTA1 } </a> }
{ hero.CTA2 && <a href="#about" className = "btn btn-outline btn-light" > { hero.CTA2 } </a> }
</div>
  </div>

{/* Lightbox */ }
<AnimatePresence>
  { selectedImage !== null && (
    <motion.div
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center"
initial = {{ opacity: 0 }}
animate = {{ opacity: 1 }}
exit = {{ opacity: 0 }}
onClick = {() => setSelectedImage(null)}
          >
  <img
              src={ galleryImages[selectedImage] }
alt = "Selected"
className = "max-h-[90vh] max-w-[90vw] object-contain"
onClick = {(e) => e.stopPropagation()}
            />
  </motion.div>
        )}
</AnimatePresence>
  </section>
  );
};

export default Hero;
