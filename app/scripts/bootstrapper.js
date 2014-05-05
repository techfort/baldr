(function () {
  var date = new Date(),
  html = [
  
    '<div class="navbar navbar-fixed-top topbar">',
      '<div class="container"><a href="/" class="brand"><img src="images/logo_white.png" width="200px" /></a>',
      '<span>&middot; WebSite Motto &middot;</span>', 
      '</div>',
    '</div>',
    '<div class="container clearfix">',
      '<div class="row">',
        '<div class="col-md-4 left clearfix">',
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
        '<p class="footertext">&copy;', date.getFullYear(),' MySite &middot; ',
        '</p>',
      '</div>',
    '</div>'
  ].join('');
  console.log('loading bootstrapper...');
  document.write(html);
  document.write('<script src="bower_components/requirejs/require.js" data-main="scripts/main.js"></script>');
}());
