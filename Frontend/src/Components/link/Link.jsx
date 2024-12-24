import '../link/Link.css'
import thumbnail from '../../assets/thumbnail.png'
import { useState } from 'react'
import {motion} from 'framer-motion'
function Link() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

   return (
    <div className="dual-phase">
      <motion.h5 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        “This dual-phase programme offers a comprehensive pathway for academic growth and professional success in the sports industry.”
      </motion.h5>

      {!isPlaying ? (
        <div className="video-placeholder" onClick={handlePlay}>
          <img 
            src={thumbnail} 
            alt="Custom Play Image" 
            className="video-thumbnail"
          />
          <div className="play-overlay">
            <span>&#9654;</span> {/* Play icon */}
          </div>
        </div>
      ) : (
        <iframe 
          src="https://www.youtube.com/embed/vDtfKIJOIEY" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title="Sports Industry Dual-Phase Programme"
        ></iframe>
      )}
    </div>
  );
}

export default Link 