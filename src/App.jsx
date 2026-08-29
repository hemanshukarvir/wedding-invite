import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

import EnvelopeIntro from "./components/EnvelopeIntro";
import HeroSlide from "./components/HeroSlide";
import CountdownSlide from "./components/CountdownSlide";
import EventSlide from "./components/EventSlide";

function App() {
  const [inviteOpen, setInviteOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  const audioRef = useRef(null);

  // =========================
  // BACKGROUND MUSIC
  // =========================

  useEffect(() => {
    if (inviteOpen && !musicStarted) {
      const audio = new Audio("/music.mp3");

      audio.loop = true;
      audio.volume = 0.3;

      audio.play().catch(() => {
        console.log("Music playback was blocked by the browser.");
      });

      audioRef.current = audio;

      setMusicStarted(true);
    }
  }, [inviteOpen, musicStarted]);


  // Stop music when website is closed/unmounted
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);


  // =========================
  // MUTE / UNMUTE
  // =========================

  const toggleMute = () => {
    if (!audioRef.current) return;

    const newMutedState = !isMuted;

    audioRef.current.muted = newMutedState;

    setIsMuted(newMutedState);
  };


  // =========================
  // SCROLL PROGRESS
  // =========================

  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });


  return (
    <>
      {!inviteOpen ? (
        <EnvelopeIntro
          onComplete={() => setInviteOpen(true)}
        />
      ) : (
        <>
          {/* Scroll progress */}
          <motion.div
            style={{
              position: "fixed",
              right: 0,
              top: 0,
              width: "3px",
              height: "100vh",
              background:
                "linear-gradient(180deg, #c9942a, #f0d080)",
              transformOrigin: "top",
              scaleY,
              zIndex: 9999,
            }}
          />


          {/* Music button */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Play music" : "Mute music"}
            className="music-button"
          >
            {isMuted ? "🔇" : "♪"}
          </button>


          {/* Wedding invitation */}
          <HeroSlide />

          <CountdownSlide />


          <EventSlide
            label="THE FIRST HUES OF LOVE"
            heading="Mehendi"
            headingColor="#1e5c2a"
            description="Begin the celebrations with henna, music, laughter and beautiful memories."
            date="18 February 2027"
            venue="Mira Road"
            backgroundImage="/mehendi.jfif"
            backgroundPosition="center bottom"
            mapsUrl="https://www.google.com/maps/search/?api=1&query=Mira+Road+Mumbai"
          />


          <EventSlide
            label="A NIGHT OF LOVE & CELEBRATION"
            heading="Engagement & Cocktails"
            headingColor="#6b1e48"
            description="An evening of love, laughter, cocktails and the beginning of our forever."
            date="20 February 2027"
            time="7:00 PM"
            venue="Mumbai"
            backgroundImage="/engagement.jfif"
            backgroundPosition="center center"
            mapsUrl="https://www.google.com/maps/search/?api=1&query=The+Sea+Coast+Farm+%26+Cafe+Virar"
          />


          <EventSlide
            label="A DAY OF SUNSHINE & JOY"
            heading="Haldi"
            headingColor="#7a4e00"
            description="A joyful celebration filled with colour, laughter and the warmth of our loved ones."
            date="20 February 2027"
            time="9:00 AM"
            venue="Mumbai"
            backgroundImage="/haldi.jfif"
            backgroundPosition="center bottom"
            mapsUrl="https://www.google.com/maps/search/?api=1&query=The+Sea+Coast+Farm+%26+Cafe+Virar"
          />


          <EventSlide
            label="THE BEGINNING OF FOREVER"
            heading="The Wedding"
            headingColor="#5a3200"
            description="Join us as we begin our forever surrounded by the people we love."
            date="21 February 2027"
            time="12:23 PM"
            venue="The Sea Coast Farm & Cafe, Virar (W)"
            backgroundImage="/wedding.jfif"
            backgroundPosition="center center"
            mapsUrl="https://www.google.com/maps/search/?api=1&query=The+Sea+Coast+Farm+%26+Cafe+Virar"
          />


          <EventSlide
            label="CELEBRATING OUR FOREVER"
            heading="Reception"
            headingColor="#5a3200"
            description="Come celebrate our new beginning with an evening filled with love, laughter and cherished memories."
            date="21 February 2027"
            time="7:00 PM"
            venue="Mumbai"
            backgroundImage="/reception.jfif"
            backgroundPosition="center center"
            mapsUrl="https://www.google.com/maps/search/?api=1&query=The+Sea+Coast+Farm+%26+Cafe+Virar"
          />
        </>
      )}
    </>
  );
}

export default App;