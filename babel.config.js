//按需引入其他ui库插件
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["import", {
      libraryName: "mand-mobile",
      libraryDirectory: "lib"
    }]
  ]
}
