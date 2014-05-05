(function () {
var siteConfig = {
  "appName": "mySite",
  "pages": [
    {
      "name": "home",
      "label": "home page"
    },
    {
      "name": "bio",
      "label": "about page"
    },
    {
      "name": "articles",
      "label": "articles page"
    },
    {
      "name": "faq",
      "label": "FAQ page"
    },
    {
      "name": "contact",
      "label": "contact page"
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