
function addTrain(event) {
   event.preventDefault();

   let time = $("input[name=firstDeparture]").val(); 
   let hour = parseInt(time.split(":")[0]);
   let min = parseInt(time.split(":")[1]);
   
   let leave = moment().hour(hour).minute(min);
   console.log(leave);

   let newTrain = $("<tr>");

   let name = $("<td>").text($("input[name=trainName]").val());
   let dest = $("<td>").text($("input[name=destination]").val());
   let first = $("<td>").text(leave.format("hh:mm"));
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