$(document).ready(function() {
  $.get('/impacts', {}, function(data) {
    console.log('Data:', data);
  });
});
