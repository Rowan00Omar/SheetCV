import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';

interface DocumentsProps {
  content: {
    title: string;
    file: {
      title: string;
      url: string;
      view: string;
      download: string;
    };
  };
}

const DocumentModal: React.FC<{ fileUrl: string; onClose: () => void }> = ({ fileUrl, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-base-100 rounded-lg w-full h-full max-w-4xl max-h-[90vh] flex flex-col"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b flex justify-end">
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost">✕</button>
        </div>
        <iframe src={fileUrl} className="w-full h-full" title="Document Viewer" />
      </motion.div>
    </motion.div>
  );
};

const Documents: React.FC<DocumentsProps> = ({ content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Section id="documents" title={content.title}>
        <div className="max-w-md mx-auto">
            <motion.div 
                className="card bg-base-100 shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">{content.file.title}</h2>
                    <div className="card-actions justify-center mt-4">
                        <motion.button 
                            className="btn btn-primary" 
                            onClick={() => setIsModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {content.file.view}
                        </motion.button>
                        <motion.a 
                            href={content.file.url} 
                            download 
                            className="btn btn-outline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {content.file.download}
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </div>
      </Section>

      <AnimatePresence>
        {isModalOpen && <DocumentModal fileUrl={content.file.url} onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Documents;
