var wintersmith = require('wintersmith');

var env = wintersmith({'port' : 29600, output: '../'});

// build site
env.build(function(error) {
  if (error) throw error;
  console.log('Done!');
});

// preview
env.preview(function(error, server) {
  if (error) throw error;
  console.log('Server running!');
});

// do something with the content tree
env.load(function(error, result) {
  if (error) throw error;
  console.log('Contents loaded :' + result);
});