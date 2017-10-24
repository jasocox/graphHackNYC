$(document).ready(function() {
  $.get('/impacts', {}, function(impacts) {
    console.log('Data:', impacts);

    JSON.parse(impacts).forEach(function(impact) {
      var possibility = impact.possibility;
      var id;

      if (impact.start < "2027") {
        id = 1;
      }
      else if (impact.start < "2037") {
        id = 2;
      }
      else if (impact.start < "2047") {
        id = 3;
      }
      else if (impact.start < "2057") {
        id = 4;
      }
      else if (impact.start < "2067") {
        id = 5;
      }
      else if (impact.start < "2077") {
        id = 6;
      }
      else if (impact.start < "2087") {
        id = 7;
      }
      else if (impact.start < "2097") {
        id = 8;
      }
      else {
        id = 9;
      }

      addDotToID(id, possibility);
    });
  });
});

function addDotToID(id, possibility) {
  console.log('ID:', id);
  console.log('Possibility:', possibility);
}
