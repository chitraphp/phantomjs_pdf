/**
 * Create page object
 */
var page = require( 'webpage' ).create();
    var system = require('system');

    page.paperSize = {
  format: "Letter",
  orientation: "portrait",
  margin: {left:"2.5cm", right:"2.5cm", top:"1cm", bottom:"1cm"},
  footer: {
    height: "0.9cm",
    contents: phantom.callback(function(pageNum, numPages) {
      return "<div style='text-align:center;'><small>" + pageNum +
        " / " + numPages + "</small></div>";
    })
  }
};

/**
 * Check for required parameters
 */


page.open(system.args[ 1 ], function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
    } else {
        window.setTimeout(function () {
            page.render(system.args[ 2 ]);
            phantom.exit();
        }, 12000); // Change timeout as required to allow sufficient time
      }
});
