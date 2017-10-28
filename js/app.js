$(function() {
  $("#GetCards").click(function displayProxy() {
    $.getJSON('https://thronesdb.com/api/public/cards/', function(gotResults) {
      var lines = $('textarea').val().split('\n');
      for (var j = 0; j < lines.length; j++) {
        var z = lines[j].split(' ')[0];
        var x = z.slice(0, -1);
        var regExp = /\(([^)]+)\)/;
        var cardLabel = lines[j].split(' ').splice(1).join(' ');
        var cardExtensionTab = lines[j].split(' ').splice(lines[j].split(' ').length - 1);
        var cardExtension = regExp.exec(cardLabel)[1];
        var lastIndex = cardLabel.lastIndexOf(" (");
        var cardName = cardLabel.substring(0, lastIndex);
        //  var cardLabel = lines[j].substring(2);
        //var x = lines[j].split(0);
        console.log("label complet: " + cardLabel)
        console.log("Extension : " + cardExtension)
        console.log("Nombre de cartes: " + x)
        console.log("Nom de Carte : " + cardName);
        console.log(lastIndex)
        for (var n = 0; n < x; n++) { //Pour chaque ligne
          for (var i = 0; i < gotResults.length; i++) { //Pour chaque objet du json
            if (gotResults[i].label === cardLabel) { //Si label objet === nom tapé
                $("#img-section").html($("#img-section").html() + '<img src=https://thronesdb.com' + gotResults[i].imagesrc + ' class= "scan"></img>');
            } else if (gotResults[i].label === cardName) {
              $("#img-section").html($("#img-section").html() + '<img src=https://thronesdb.com' + gotResults[i].imagesrc + ' class= "scan"></img>');
            }
          }
        }
      }
    });
  });


  $("#GetPlots").click(function displayPlots() {
    $.getJSON('https://thronesdb.com/api/public/cards/', function(gotResults) {
      var lines = $('#plotarea').val().split('\n');
      for (var j = 0; j < lines.length; j++) {
        var z = lines[j].split(' ')[0];
        var x = z.slice(0, -1);
        var regExp = /\(([^)]+)\)/;
        var cardLabel = lines[j].split(' ').splice(1).join(' ');
        var cardExtensionTab = lines[j].split(' ').splice(lines[j].split(' ').length - 1);
        var cardExtension = regExp.exec(cardLabel)[1];
        var lastIndex = cardLabel.lastIndexOf(" (");
        var cardName = cardLabel.substring(0, lastIndex);
        //  var cardLabel = lines[j].substring(2);
        //var x = lines[j].split(0);
        console.log("label complet: " + cardLabel)
        console.log("Extension : " + cardExtension)
        console.log("Nombre de cartes: " + x)
        console.log("Nom de Carte : " + cardName);
        console.log(lastIndex)
        for (var n = 0; n < x; n++) { //Pour chaque ligne
          for (var i = 0; i < gotResults.length; i++) { //Pour chaque objet du json
            if (gotResults[i].label === cardLabel) { //Si label objet === nom tapé
                $("#plot-section").html($("#plot-section").html() + '<img src=https://thronesdb.com' + gotResults[i].imagesrc + ' class= "plot"></img>');
            } else if (gotResults[i].label === cardName) {
              $("#plot-section").html($("#plot-section").html() + '<img src=https://thronesdb.com' + gotResults[i].imagesrc + ' class= "plot"></img>');
            }
          }
        }
      }
    });
  });




  $("#resetProxy").click(function() {
    $("#img-section").empty();
    $("#plot-section").empty();
  });

});

function printProxys() {
  window.print();
}
