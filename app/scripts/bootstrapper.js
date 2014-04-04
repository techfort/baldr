(function () {
  var date = new Date(),
  html = [
  
    '<div class="navbar navbar-fixed-top topbar">',
      '<div class="container"><a href="/" class="brand"><img src="images/logo_white.png" width="200px" /></a>',
      '<span class="doomsword">&middot; Epic Heavy Metal &middot;</span><bgs></bgs>', 
      '</div>',
    '</div>',
    '<div class="container text clearfix">',
      '<div class="row">',
        '<div class="col-md-4 left ngDiv clearfix">',
          '<div class="panel clearfix">',
            '<div ui-view="menu" class="clearfix"></div>',
          '</div>',
        '</div>',
        '<div class="col-md-offset-1 col-md-7 right ngDiv">',
          '<div ui-view="main" class="clearfix"></div>',
        '</div>',
      '</div>',
    '</div>',
    '<div id="footer">',
      '<div class="container">',
        '<p class="footertext">&copy;', date.getFullYear(),' DoomSword &middot; ',
        '<a href="https://www.facebook.com/pages/DoomSword/271105175523" target="_blank">facebook</a> &middot; ',
        '<a href="https://github.com/techfort/doomsword" target="_blank">open-source code</a>',
        '</p>',
      '</div>',
    '</div>'
  ].join('');
  console.log('loading bootstrapper...');
  document.write(html);
  document.write('<script src="bower_components/requirejs/require.js" data-main="scripts/main.js"></script>');
}());
