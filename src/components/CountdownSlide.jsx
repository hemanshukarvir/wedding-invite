import { motion } from "framer-motion";
import { useCountdown } from "../hooks/useCountdown";

export default function CountdownSlide() {
  const { days, hours, minutes, seconds } =
    useCountdown("2027-02-21T12:23:00");

  return (
		<section
	  className="countdown-slide"
	  style={{
		backgroundImage: 'url("/countdown_gif.gif")',
	  }}
	>
      <div className="countdown-overlay"></div>

      <div className="countdown-content">
        <motion.p
          className="countdown-small"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          OUR BIG DAY
        </motion.p>

        <motion.h2
          className="countdown-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          21 February 2027
        </motion.h2>

        <p className="countdown-location">
          MUMBAI
        </p>

        <div className="countdown-timer">
          <TimeBox value={days} label="DAYS" />
          <TimeBox value={hours} label="HOURS" />
          <TimeBox value={minutes} label="MINUTES" />
          <TimeBox value={seconds} label="SECONDS" />
        </div>

        <p className="countdown-message">
          Counting every moment until we say
        </p>

        <p className="countdown-love">
          "Shubh Mangal Savdhan"
        </p>
      </div>
    </section>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="time-box">
      <div className="time-number">
        {String(value).padStart(2, "0")}
      </div>

      <div className="time-label">
        {label}
      </div>
    </div>
  );
}