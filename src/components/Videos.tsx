import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Section from './Section';

interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}

interface VideosProps {
  content: {
    title: string;
    items: Video[];
  };
}

const VideoLightbox: React.FC<{ videos: Video[], selected: number, setSelected: (index: number | null) => void }> = ({ videos, selected, setSelected }) => {
    const [[page, direction], setPage] = useState([selected, 0]);

    const changeVideo = (newDirection: number) => {
        let newIndex = page + newDirection;
        if (newIndex < 0) newIndex = videos.length - 1;
        else if (newIndex >= videos.length) newIndex = 0;
        setPage([newIndex, newDirection]);
    };

     useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') changeVideo(1);
            if (e.key === 'ArrowLeft') changeVideo(-1);
            if (e.key === 'Escape') setSelected(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [page]);

    const videoIndex = page % videos.length;
    const currentVideo = videos[videoIndex];

    return (
        <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
        >
            <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                <AnimatePresence>
                    <motion.div
                        key={page}
                        className="aspect-video bg-black"
                        initial={{ opacity: 0, x: direction > 0 ? 200 : -200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction > 0 ? -200 : 200 }}
                        transition={{ duration: 0.3 }}
                    >
                        <iframe
                            src={currentVideo.videoUrl}
                            title={currentVideo.title}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </motion.div>
                </AnimatePresence>
            </div>
            <button aria-label="Close video lightbox" className="absolute top-4 right-4 text-white text-3xl z-10" onClick={() => setSelected(null)}>&times;</button>
            <button aria-label="Previous video" className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl p-4" onClick={(e) => { e.stopPropagation(); changeVideo(-1); }}>&#10094;</button>
            <button aria-label="Next video" className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl p-4" onClick={(e) => { e.stopPropagation(); changeVideo(1); }}>&#10095;</button>
        </motion.div>
    );
};


const Videos: React.FC<VideosProps> = ({ content }) => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const getVideosPerPage = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth >= 1280) return 4; // xl
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 640) return 2;  // sm
    return 1;
  };

  const [videosPerPage, setVideosPerPage] = useState(getVideosPerPage());

  useEffect(() => {
    const handleResize = () => setVideosPerPage(getVideosPerPage());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [[page, direction], setPage] = useState([0, 0]);
  const pageCount = content.items.length > 0 ? Math.ceil(content.items.length / videosPerPage) : 0;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const pageIndex = pageCount > 0 ? ((page % pageCount) + pageCount) % pageCount : 0;
  const startIndex = pageIndex * videosPerPage;
  const currentVideos = content.items.slice(startIndex, startIndex + videosPerPage);

  const carouselVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const cardVariants: Variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0 }
  };

  return (
    <>
      <Section id="videos" title={content.title} className="bg-base-100">
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden relative min-h-[420px] md:min-h-[250px] px-12">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 absolute w-full top-0 left-0 right-0 p-1"
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                {currentVideos.map((video, index) => {
                  const originalIndex = startIndex + index;
                  return (
                    <motion.div
                      key={video.id}
                      className="card bg-base-100 shadow-xl overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedVideo(originalIndex)}
                      variants={cardVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <figure className="relative aspect-video">
                        <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-warning/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center text-warning text-3xl transition-transform duration-300 scale-75 group-hover:scale-100">
                            &#9658;
                          </div>
                        </div>
                      </figure>
                      <div className="card-body p-4">
                        <h2 className="card-title justify-center text-center text-sm font-semibold">{video.title}</h2>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {pageCount > 1 && (
            <>
              <button
                aria-label="Previous videos"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 btn btn-circle btn-ghost"
                onClick={() => paginate(-1)}
              >
                &#10094;
              </button>
              <button
                aria-label="Next videos"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 btn btn-circle btn-ghost"
                onClick={() => paginate(1)}
              >
                &#10095;
              </button>
            </>
          )}
        </div>
      </Section>
      <AnimatePresence>
        {selectedVideo !== null && (
          <VideoLightbox videos={content.items} selected={selectedVideo} setSelected={setSelectedVideo} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Videos;