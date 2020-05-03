module.exports = {
  plugins: [
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-PCXMDJZ6YS",
      },
    },
  ],
}
