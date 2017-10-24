$(document).ready(function() {
  $.get('/impacts', {}, function(impacts) {
    console.log('Data:', impacts);

    JSON.parse(impacts).forEach(function(impact) {
      console.log(impact.start);
    });
  });
});

function addDotToID(id) {
  console.log('ID:', id);
}
