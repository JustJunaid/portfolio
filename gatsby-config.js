module.exports = {
  siteMetadata: {
    title: "JustJunaid | Junaid Portfolio",
    titleTemplate: "%s · Digital Analyst",
    description:
      "This is portfolio website of Junaid Choudhary. Another Self-taught full-stack Developer",
    url: "https://www.justjunaid.com", // No trailing slash allowed!
    image: "/assets/img/junaid.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@junaid210_",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Junaid Portfolio`,
        short_name: `Junaid`,
        start_url: `/`,
        background_color: `#232741`,
        theme_color: `#232741`,
        display: `standalone`,
        icon: `static/assets/img/JC_logo.svg`,
        cache_busting_mode: "none",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ["**/*"],
        },
        precachePages: [`/about/`, `/portfolio/`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
        pageTransitionDelay: 0,
      },
    },
  ],
}
