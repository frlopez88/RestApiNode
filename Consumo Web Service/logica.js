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
		success: function(data){
			console.log(data);
		},
		data: JSON.stringify(nuevaPersona)

	});

		


}