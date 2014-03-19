(function () {
  var html = [
    '<div class="container">',
      '<div class="row">',
        '<div class="col-md-4 left">',
          '<div class="panel wb">',
            '<div class="header">',
              '<a href="/"><img src="images/logo.png" width="200px" /></a>',
            '</div>',
            '<ul class="nav animated fadeInUp">',
              '<li><a href="#/bio">Bio</a></li>',
              '<li><a href="#/members">Members</a></li>',
              '<li>Discography</li>',
              '<li>FAQ</li>',
            '</ul>',
          '</div>',
        '</div>',
        '<div class="col-md-8 right">',
          '<div ng-view=""></div>',
        '</div>',
      '</div>',
    '</div>'
  ].join('');
  console.log('loading bootstrapper...');
  document.write(html);
  document.write('<script src="bower_components/requirejs/require.js" data-main="scripts/main.js"></script>');
}());
