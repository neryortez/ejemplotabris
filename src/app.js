var logginPage = require('./logginPage')

var navigationView = new tabris.NavigationView({
  left: 0, top: 0, right: 0, bottom: 0, toolbarVisible: false
}).appendTo(tabris.ui.contentView);

logginPage(navigationView);
