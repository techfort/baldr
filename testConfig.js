(function (window) {
var siteConfig = {
  "appName": "doomswordApp",
  "pages": [
    {
      "name": "home",
      "label": "I:......On Blades, and Fate."
    },
    {
      "name": "bio",
      "label": "II:.....The Rise of the Sword."
    },
    {
      "name": "members",
      "label": "III:....Champions Eternal"
    },
    {
      "name": "faq",
      "label": "IV:.....The Oracle of Doom"
    },
    {
      "name": "contact",
      "label": "V:......Resounding Horn"
    },
    {
      "name": "test",
      "label": "Testing.."
    }
  ]
}
  window.siteConfig = siteConfig;
  if (typeof define === "function" && define.amd) {
    define("config", [], function () {
    return siteConfig;
  });
}
!!module && module.exports = siteConfig;}(window));