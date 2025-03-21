const express = require('express');
const app = express();
const morgan = require('morgan');

//configuracion del servidor en el puerto 3000

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Tarea Ques es Middleware

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//nuestro primer web service 

app.get('/', (req,res) =>{

    res.json(
        {"Title": " Hola mundo"}
    );

});

//enpoint pra sumar dos numeros
app.post('/sumar', (req, res) =>{

    const{num1, num2} = req.body; //se declaran los datos de enetrada


    //Validar que se hayan enviado los dos numeros que no esten vacios
    if (!num1 || !num2){
        return res.status(400).send({ error: 'faltan numeros para sumar'});
    }

    //sumar los numeros
    const resultado = num1 + num2;

    //Enviar el resultado
    res.send({ resultado });

})

app.listen(app.get('port')),()=>{
    console.log(`servidor localhost en puerto ${app.get('port')}`);

}



