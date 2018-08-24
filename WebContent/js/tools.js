function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
function intToStringTimestamp(tempo) {
	if(tempo == 999999999 || tempo == 0) return "--:--:--,---";
	var hora = 0;
	while(tempo >= 3600000){
		hora = hora + 1;
		tempo = tempo - 3600000;
	}
	var minuto = 0;
	while(tempo >= 60000){
		minuto = minuto + 1;
		tempo = tempo - 60000;
	}
	var segundo = 0;
	while(tempo >= 1000){
		segundo = segundo + 1;
		tempo = tempo - 1000;
	}
	var milissegundo = tempo;
	var tempoAExibir = pad(hora,2)+":"+pad(minuto,2)+":"+pad(segundo,2)+","+pad(milissegundo,3);				
	return tempoAExibir;
}