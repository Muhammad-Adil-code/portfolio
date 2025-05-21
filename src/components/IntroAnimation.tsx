import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Code, Database, Globe, Cpu } from 'lucide-react';

const IntroAnimation: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [showTerminal, setShowTerminal] = useState(true);
  const [showName, setShowName] = useState(false);
  const [showUniverse, setShowUniverse] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowName(true), 1000);
    const timer2 = setTimeout(() => setShowUniverse(true), 2500);
    const timer3 = setTimeout(() => onComplete(), 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black z-50 flex items-center justify-center perspective-1000"
        initial={{ opacity: 1 }}
        animate={{ opacity: showUniverse ? 0 : 1 }}
        transition={{ duration: 1.5 }}
        onAnimationComplete={() => showUniverse && onComplete()}
      >
        <motion.div
          className="relative"
          initial={{ rotateX: 0, rotateY: 0, z: 0 }}
          animate={showUniverse ? {
            rotateX: [0, 45, -45, 0],
            rotateY: [0, -45, 45, 0],
            z: [0, -500, -1000, 0],
            scale: [1, 1.2, 0.8, 1]
          } : {}}
          transition={{
            duration: 2,
            times: [0, 0.3, 0.7, 1],
            ease: "easeInOut"
          }}
        >
          {showTerminal && (
            <motion.div
              className="text-green-500 font-mono text-2xl md:text-4xl text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="mb-4 relative">
                <span className="text-green-500">$ </span>
                <span className="animate-blink">_</span>
                <motion.div
                  className="absolute -top-20 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Laptop size={48} className="text-green-500" />
                </motion.div>
              </motion.div>
              {showName && (
                <motion.div
                  className="text-3xl md:text-5xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  MUHAMMAD ADIL
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>

        {showUniverse && (
          <>
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [1, 20],
                rotateZ: [0, 360]
              }}
              transition={{ 
                duration: 2,
                ease: "easeInOut",
                times: [0, 1]
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-50" />
              <motion.div 
                className="stars absolute inset-0"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 100,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 perspective-1000"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, times: [0, 0.5, 1] }}
            >
              {/* Tech Icons */}
              {[Code, Database, Globe, Cpu].map((Icon, index) => (
                <motion.div
                  key={`icon-${index}`}
                  className="absolute"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    z: -1000,
                    scale: 0
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    z: [-1000, 1000],
                    rotateX: [0, 360],
                    rotateY: [0, 360]
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Icon size={32} className="text-white" />
                </motion.div>
              ))}

              {/* Particles */}
              {Array.from({ length: 100 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    z: -1000,
                    scale: 0
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    z: [-1000, 1000],
                    rotateX: [0, 360],
                    rotateY: [0, 360]
                  }}
                  transition={{
                    duration: 2,
                    delay: Math.random() * 0.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              ))}
            </motion.div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroAnimation;