(function () {
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
      "name": "news",
      "label": "VI: Hear ye! "
    },
    {
      "name": "news",
      "label": "VI: Hear ye! "
    },
    {
      "name": "news",
      "label": "VI: Hear ye! "
    },
    {
      "name": "news",
      "label": "VI: Hear ye! "
    },
    {
      "name": "news",
      "label": "VI: Hear ye! "
    }
  ]
}

  if (typeof define === "function" && define.amd) {
    define("config", [], function () {
    return siteConfig;
  });
}
  try { module.exports = siteConfig; } catch (err) {}
})();