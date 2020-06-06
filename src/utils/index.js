import { trackCustomEvent } from "gatsby-plugin-google-analytics";

export const handleTrackCustomEvent = (buttonText) => {
  trackCustomEvent({
    category: "Portfolio Website",
    action: `${buttonText}_CLICK`,
    label: `${buttonText}_CLICK`,
  });
};

export const NavLinks = [
  {
    to: "/",
    text: "HOME",
  },
  {
    to: "/about",
    text: "ABOUT",
  },
  {
    externalLink: true,
    to:
      "https://docs.google.com/document/d/1j2WUgTCgqhP5LnB6z4iFAcrElFzEiFrqCY75qm_HTkI/edit",
    text: "RESUME",
  },
  {
    to: "/portfolio",
    text: "PORTFOLIO (IN DEV)",
  },
  {
    to: "/contact",
    text: "CONTACT",
  },
];
