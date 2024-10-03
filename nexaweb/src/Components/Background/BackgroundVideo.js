import React from 'react';
import './BackgroundVideo.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ExampleComponent from '../AnimationComponents/ExampleComponent';

const BackgroundVideo = () => {
  const videoStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    objectFit: "cover", // Ensures the video covers the entire area
    zIndex: -1, // Keep it behind other content
  };
  const theme = createTheme();
  return (
    <div className="video-container">
      <div>
        <video style={videoStyle} autoPlay loop muted>
          <source
            src="/Video/back-tech.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="intro-text">
        <h1 className="animated-text">
          Welcome to <span>Nexacode Solution</span>
        </h1>
        <p className="animated-subtext">Explore the world of possibilities</p>
        <ThemeProvider theme={theme}>
          <ExampleComponent />
        </ThemeProvider>
      </div>

    </div>
  );
}

export default BackgroundVideo;
