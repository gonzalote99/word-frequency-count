function convert(){

	
	if(document.getElementById("texto").value==""){
		alert("Campo de texto vazio!");
		return none;
	}

	
	var tamanho=0;
	
	
	var tamanho_total=0;
	

	var words = {};
	
	
	var arr = document.getElementById("texto").value.toLowerCase().split(/[ ,\[\].()-;—\"\'»?:!]+/).filter(Boolean);

 
	
	for (var i in arr){
    	var word = arr[i];
    	if(words[word] === undefined){
        	words[word]=0;
            tamanho++;
        }
    	words[word]++;
		tamanho_total++;
	}
	

    var keys = [];
	for(var k in words) keys.push(k);
	
    keysSorted = Object.keys(words).sort(function(a,b){return words[b] - words[a]});

     var janela = window.open("","_blank");

     janela.document.write("<h2 align='center'>result</h1><h4 align='center'>"+tamanho+" odd-words </h4><br>");
     janela.document.write("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'><table class='table table-striped'><thead><tr><th>palvara</th><th>ocorrencias</th></tr></thead<tbody>");

     for(i = 0; i < tamanho; i++) {
       percent = (words[keysSorted[i]]*100/tamanho_total).toFixed(3);
       janela.document.write("<title>word frequency - result </title><tr><td><a target='_blank' href='https://translate.google.com.br/?hl=pt-BR#view=home&op=translate&sl=auto&tl=pt&text="+keysSorted[i]+"'>"+keysSorted[i]+"</a></td><td> "+words[keysSorted[i]]+"<span style='color:#2E8B57'>("+percent+"%)</span></td></tr>");
     }

}