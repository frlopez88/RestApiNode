const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());


var con = mysql.createConnection({
	    host: "127.0.0.1",
	    user: "root",
	    password: "password", 
	    database : "bd_des_web"
  	});


app.get('/api/persona/', (req, res)=>{

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


app.post('/api/persona/', (req,res)=>{

	var personaNueva = {

		id: 0, 
		nombre: req.body.nombre, 
		apellido : req.body.apellido, 
		genero : req.body.genero

	};

	let reslutCopia;

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


app.listen(8080);