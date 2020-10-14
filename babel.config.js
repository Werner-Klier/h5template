module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["import", {
      libraryName: "mand-mobile",
      libraryDirectory: "lib"
    }],
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    },"vant"]
  ]
}
