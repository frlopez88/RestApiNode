const express = require('express');
const app = express();

app.use(express.json());


var bdPersonas = [
		{
			id: 1, 
			nombre: "Cristiano Ronaldo"
		}, 
		{

			id:2, 
			nombre: "Leo Messi"
		}
	];

var bdTelefono =[

	{	id:1, 
		idpersona:1, 
		telefono:"90998912"
	},
	{	id:2, 
		idpersona:1, 
		telefono:"90998913"
	}

];

app.get('/api/persona',  (req, res) =>{

	res.send(bdPersonas);

});

app.get('/api/persona/:id',  (req, res) =>{

	const retorno = bdPersonas.find( c=> c.id ===  parseInt(req.params.id) );
	res.send(retorno);

});

app.post('/api/persona', (req, res) =>{


	const nuevaPersona = {
		id: bdPersonas.length + 1, 
		nombre: req.body.nombre
	};



	bdPersonas.push(nuevaPersona);

	res.send(nuevaPersona);

});


app.get('/api/telefono',  (req, res) =>{

	res.send(bdTelefono);

});


app.get('/api/telefono/:pepito',  (req, res) =>{

	const retorno = bdTelefono.find( c=> c.id ===  parseInt(req.params.pepito) );
	res.send(retorno);

});



app.listen(8080);