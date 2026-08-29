import { motion } from "framer-motion";

export default function EventSlide({
  label,
  heading,
  date,
  time,
  venue,
  description,
  headingColor,
  mapsUrl,
  backgroundImage,
  backgroundPosition = "center center",
}) {
  return (
    <section
      className="event-slide"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundPosition,
      }}
    >
      <div className="event-background-overlay"></div>

      <motion.div
        className="event-card event-card-photo"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="event-label">
          {label}
        </p>

        <div className="event-line"></div>

        <h2
          className="event-heading"
          style={{ color: headingColor }}
        >
          {heading}
        </h2>

        <p className="event-description">
          {description}
        </p>

        <div className="event-details">

          <div className="event-detail">
            <span className="event-icon">✦</span>
            <span>{date}</span>
          </div>

          {time && (
            <div className="event-detail">
              <span className="event-icon">◷</span>
              <span>{time}</span>
            </div>
          )}

          

        </div>

        {mapsUrl && (
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="maps-button"
          >
            VIEW LOCATION
          </a>
        )}
      </motion.div>
    </section>
  );
}