function insertPersona(){

	var nuevaPersona = {

		nombre :  document.getElementById("nombre").value ,
		apellido : document.getElementById("apellido").value, 
		genero: document.getElementById("genero").value

	};



	$.ajax({
		url : 'http://localhost:8080/api/persona/', 
		type : 'post',
		dataType : 'json',
		contentType : 'application/json', 
		async : false,
		success: function(data){
			console.log(data);
		},
		data: JSON.stringify(nuevaPersona)

	});

		


}

function selectPersonas(){

	$.ajax({
		url : 'http://localhost:8080/api/persona/', 
		type : 'get',
		dataType : 'json',
		async : false,
		contentType : 'application/json', 
		success: function(data){

			var htmlTable = ' <table> <tr> <th> nombre </th> <th> apellido </th> </tr> ';
			var i =0;
			for ( i =0 ; i < data.length; i++){

				let fila = ' <tr> ';
				fila = fila + ' <td>' + data[i].nombre +  '</td>';
				fila = fila + ' <td>' + data[i].apellido +  '</td>';
				fila = fila + ' </tr>';


				htmlTable = htmlTable+ fila;

			}

			htmlTable = htmlTable + '</table>';

			document.getElementById("datos").innerHTML = htmlTable;


		}

	});

}