var generatedTable = document.createElement("table");
generatedTable.setAttribute("id","standings");
var raceInfo = document.createElement("caption");
raceInfo.innerHTML = readJSON.TrackName+", "+readJSON.TrackConfig+", "+readJSON.Type;
generatedTable.append(raceInfo);
var headerRow = generatedTable.insertRow(-1);
var posicao = headerRow.insertCell(-1);
posicao.innerHTML = "Posição";
var piloto = headerRow.insertCell(-1);
piloto.innerHTML = "Piloto";
var melhorvolta = headerRow.insertCell(-1);
melhorvolta.innerHTML = "Melhor Volta";
var tempototal = headerRow.insertCell(-1);
tempototal.innerHTML = "Tempo Total";
var voltas = headerRow.insertCell(-1);
voltas.innerHTML = "Voltas";
var body = document.getElementById("body");
body.append(generatedTable);
for(var i = 0; i < readJSON.Result.length; ++i){
	var currentRow = generatedTable.insertRow(-1);
	var position = currentRow.insertCell(-1);
	position.innerHTML = i+1;
	var driverName = currentRow.insertCell(-1);
	driverName.innerHTML = readJSON.Result[i].DriverName;
	var bestLap = currentRow.insertCell(-1);
	bestLap.innerHTML = intToStringTimestamp(readJSON.Result[i].BestLap);
	var totalTime = currentRow.insertCell(-1);
	totalTime.innerHTML = intToStringTimestamp(readJSON.Result[i].TotalTime);
	var lapCount = currentRow.insertCell(-1);
	lapCount.classList.add("rightAligned");
	var laps = 0;
	for(var j = 0; j < readJSON.Laps.length; ++j){
		if(readJSON.Laps[j].DriverGuid == readJSON.Result[i].DriverGuid) ++laps;
	}
	lapCount.innerHTML = laps;
}