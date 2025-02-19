import React from "react";
import styles from "./FullScreenVideo.module.css";

const FullScreenVideo = () => {
  return (
    <div className={styles.videoContainer}>
      <video className={styles.videoBackground} autoPlay loop muted>
        <source src="/videos/video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default FullScreenVideo;
