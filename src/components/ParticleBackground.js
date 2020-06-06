import Particles from "react-particles-js";
import React from "react";
import styled from "styled-components";

const StyledParticleContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

export default function ParticleBackground() {
  return (
    <StyledParticleContainer>
      <Particles
        height="100vh"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                speed: 5,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
    </StyledParticleContainer>
  );
}
