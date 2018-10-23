
function addTrain(event) {
   event.preventDefault();
   let newTrain = $("<tr>");

   let name = $("<td>").text($("input[name=trainName]").val());
   let dest = $("<td>").text($("input[name=destination]").val());
   let first = $("<td>").text($("input[name=firstDeparture]").val());
   let repeat = $("<td>").text($("input[name=frequency]").val());

   newTrain.append(name, dest, first, repeat);
   $("#trainTable").append(newTrain);
}

function main() {
   $("#addTrain").on("click", addTrain);
}

window.onload = function() {
   main();
}