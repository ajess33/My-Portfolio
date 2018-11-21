import Typography from 'typography'
// import grandViewTheme from 'typography-theme-grand-view'

// const typography = new Typography(grandViewTheme)

const options = {
  googleFonts: [
    {
      name: `Work Sans`,
      styles: [`200`, `400`, `900`],
    },
  ],
  baseFontSize: `18px`,
  baseLineHeight: 1.4,
  headerFontFamily: [`Work Sans`, `sans-serif`],
  bodyFontFamily: [`Work Sans`, `sans-serif`],
}

const typography = new Typography(options)

// hot reload typography when in development
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
