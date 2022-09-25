import React from "react";
import styled from "styled-components";

const MovieContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2000px;
  height: 1400px;
  margin-top: -700px;
  margin-left: -1000px;
  z-index: 1;
  opacity: 0.3;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const MovieContent: React.FC = () => {
  return (
    <MovieContentContainer className="movie-content">
      <Iframe
        src="https://player.vimeo.com/video/700346662?quality=1080p&autopause=0&playsinline=1&autoplay=1&loop=1&background=1"
        allow="autoplay"
        width="100%"
        height="100%"
        allowFullScreen
      />
    </MovieContentContainer>
  );
};

export default MovieContent;
