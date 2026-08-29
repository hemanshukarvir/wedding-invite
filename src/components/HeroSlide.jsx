import { motion } from "framer-motion";

export default function HeroSlide() {
  return (
    <section className="hero-slide">

      {/* Background photo */}
      <img
        src="/couple.jfif"
        alt="Sanskruti and Hemanshu"
        className="hero-photo"
      />

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-content">

        {/* Top text */}
        <motion.div
          className="hero-top"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="hero-small-text">
            TOGETHER WITH THEIR FAMILIES
          </p>

          <div className="hero-divider"></div>

          <p className="hero-small-text">
            REQUEST THE PLEASURE OF YOUR COMPANY
          </p>
        </motion.div>


        {/* CENTER NAME BOX */}
        <div className="hero-center">

          <motion.div
            className="hero-names-box"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeOut",
            }}
          >

            <p className="hero-date">
              21 • 02 • 2027
            </p>

            <motion.h1
              className="hero-name"
              animate={{
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Sanskruti
            </motion.h1>

            <div className="hero-and">
              &amp;
            </div>

            <motion.h1
              className="hero-name"
              animate={{
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              Hemanshu
            </motion.h1>

            

          </motion.div>

        </div>

      </div>
    </section>
  );
}