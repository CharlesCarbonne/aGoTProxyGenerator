$(document).ready(function() {
  $("#Go").click(function displayProxy() {
    $.getJSON('https://thronesdb.com/api/public/cards/', function(gotResults) {
      var lines = $('textarea').val().split('\n');
      for (var j = 0; j < lines.length; j++) {
        var x = lines[j].split(' ')[0];
        var cardLabel = lines[j].split(' ').splice(1).join(' ');
        //  var cardLabel = lines[j].substring(2);
        //var x = lines[j].split(0);
        console.log(cardLabel)
        console.log(x);
        for (var n = 0; n < x; n++) { //Pour chaque ligne
          for (var i = 0; i < gotResults.length; i++) { //Pour chaque objet du json
            if (gotResults[i].label === cardLabel) { //Si label objet === nom tapé
              $("#img-section").html($("#img-section").html() + '<img src=https://thronesdb.com' + gotResults[i].imagesrc + ' class= "scan"></img>');
            } else if (gotResults[i].name === cardLabel) {
              $("#tablelabel").html($("#tablelabel").html() + '<tr><td id="cardName"></td><td id="labelResults"></td>');
              $("#cardName").html(cardLabel);
              $("#labelResults").html($("#labelResults").html() + gotResults[i].label + "<br/>");
            }

          }
        }
      }
    });
  });

  $("#resetProxy").click(function() {
    $("#img-section").empty();
  });

});

function printProxys() {
  window.print();
}

//$(document).ready(function() {
$("#resetProxy").click(function() {
  $("#img-section").empty();
});
//});
