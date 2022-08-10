const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());





app.get('/api/persona/', (req, res)=>{

	let con = mysql.createConnection({
	    host: "127.0.0.1",
	    user: "root",
	    password: "password", 
	    database : "bd_des_web"
  	});

	let sql = "select * from tbl_persona";

	con.connect(function(err) {
							  if (err) throw err;
							  con.query( sql , function (err, result, fields) {
							    if (err) throw err;
							    //res.send(JSON.stringify(result));
							    res.send(result);
							  });
							});


});

app.get('/api/persona/:id', (req, res)=>{

	let con = mysql.createConnection({
	    host: "127.0.0.1",
	    user: "root",
	    password: "password", 
	    database : "bd_des_web"
  	});

	let sql = "select * from tbl_persona where id_persona = ? ";

	const arreglovalores = [ req.params.id ]; 

	con.connect(function(err) {
							  if (err) throw err;
							  con.query( sql , arreglovalores , function (err, result, fields) {
							    if (err) throw err;
							    //res.send(JSON.stringify(result));
							    res.send(result);
							  });
							});

});


app.post('/api/persona/', (req,res)=>{

	let con = mysql.createConnection({
	    host: "127.0.0.1",
	    user: "root",
	    password: "password", 
	    database : "bd_des_web"
  	});

	var personaNueva = {

		id: 0, 
		nombre: req.body.nombre, 
		apellido : req.body.apellido, 
		genero : req.body.genero

	};


	let sql = "insert into tbl_persona (nombre, apellido, genero) values (?, ?, ?)";

	const arreglovalores = [ personaNueva.nombre, personaNueva.apellido, personaNueva.genero ];

	 con.query(sql, arreglovalores ,  
	 								function (err, result) {
								      if (err) {
								      	
								      	throw err;	

								      }else {

								      	personaNueva.id= result.insertId;
								      	res.send(personaNueva);

								      }
								      
								    });



});


app.put('/api/persona/:id', (req, res)=> {


	let con = mysql.createConnection({
	    host: "127.0.0.1",
	    user: "root",
	    password: "password", 
	    database : "bd_des_web"
  	});

	var personaExistente = {

		id: 0, 
		nombre: req.body.nombre, 
		apellido : req.body.apellido, 
		genero : req.body.genero


	};

	let sql  =  ` update tbl_persona set nombre = ? ,  
										 apellido = ?, 
										 genero = ?
				  where id_persona = ? `;


	const arreglovalores = [ 
	                        personaExistente.nombre, 
							personaExistente.apellido, 
							personaExistente.genero, 
							req.params.id
						  ];	

	con.query(sql, arreglovalores ,  
	 								function (err, result) {
								      if (err) {
								      	
								      	throw err;	

								      }else {

								      	personaExistente.id= result.insertId;
								      	res.send(personaExistente);

								      }
								      
								    });
	  
});


app.listen(8080);