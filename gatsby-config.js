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
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#232741`,
        theme_color: `#232741`,
        display: `standalone`,
        icon: `static/assets/img/JC_logo.svg`,
        cache_busting_mode: "none",
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
