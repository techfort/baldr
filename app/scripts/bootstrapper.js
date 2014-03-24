(function () {
  var date = new Date(),
  html = [
    '<div class="navbar navbar-fixed-top topbar">',
      '<div class="container"><a href="/" class="brand"><img src="images/logo.png" width="200px" /></a> &middot; Italian Epic Heavy Metal &middot; </div>',
    '</div>',
    '<div class="container">',
      '<div class="row">',
        '<div class="col-md-4 left">',
          '<div class="panel wb">',
            '<div ui-view="menu"></div>',
          '</div>',
        '</div>',
        '<div class="col-md-8 right">',
          '<div ui-view="main"></div>',
        '</div>',
      '</div>',
    '</div>',
    '<div id="footer">',
      '<div class="container">',
        '<p class="footertext">&copy;', date.getFullYear(),' DoomSword</p>',
      '</div>',
    '</div>'
  ].join('');
  console.log('loading bootstrapper...');
  document.write(html);
  document.write('<script src="bower_components/requirejs/require.js" data-main="scripts/main.js"></script>');
}());
