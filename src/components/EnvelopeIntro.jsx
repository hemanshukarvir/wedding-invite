import { motion } from "framer-motion";
import { useState } from "react";

export default function EnvelopeIntro({ onComplete }) {
  const [opened, setOpened] = useState(false);

  const handleTap = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  return (
    <div className="envelope-screen" onClick={handleTap}>
      <motion.div
        className="envelope-container"
        animate={
          opened
            ? {
                y: 80,
                opacity: 0,
                scale: 0.9,
              }
            : {
                y: [0, -8, 0],
              }
        }
        transition={
          opened
            ? {
                duration: 0.8,
              }
            : {
                y: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                },
              }
        }
      >
        <div className="envelope">
          <div className="envelope-flap"></div>

          <div className="envelope-body">
            <div className="wax-seal">H ♥ S</div>
          </div>
        </div>
      </motion.div>

      {!opened && (
        <motion.p
          className="tap-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          TAP TO OPEN
        </motion.p>
      )}
    </div>
  );
}