import React, { useRef, useEffect, useMemo } from 'react';
import './BackgroundVideo.css';
import WelcomeForm from './WelcomeForm';

const BackgroundVideo = () => {
    const videoRefs = [useRef(null), useRef(null), useRef(null)];

  const currentVideoRef = useRef(0);

  useEffect(() => {
    const playNextVideo = () => {
      const nextVideo = (currentVideoRef.current + 1) % videoRefs.length;
      videoRefs[currentVideoRef.current].current.style.display = 'none';
      videoRefs[nextVideo].current.style.display = 'block';
      videoRefs[nextVideo].current.play();
      currentVideoRef.current = nextVideo;
    };

    videoRefs.forEach((ref, index) => {
      ref.current.onended = playNextVideo;
      ref.current.style.display = index === 0 ? 'block' : 'none';
    });

    videoRefs[0].current.play();
  }, [videoRefs]);

  return (
    <div className="background-video-container">
      <video ref={videoRefs[0]} className="background-video" muted>
        <source src="/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video ref={videoRefs[1]} className="background-video" muted>
        <source src="/videos/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video ref={videoRefs[2]} className="background-video" muted>
        <source src="/videos/video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="slogan">
        <h1>Find Your Place</h1>
      </div>
      <WelcomeForm />
    </div>
  );
};

export default BackgroundVideo;
