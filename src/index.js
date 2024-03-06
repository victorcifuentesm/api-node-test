const express = require('express');
const app = express(); // iniciacion de app
const morgan = require('morgan');

//setings
app.set('port', process.env.PORT  || 3000); // puerto por el cual servidor rsponde a las peticiones
app.set('json spaces', 2); // se le agrega la configuracionde espacio de 2 para que la visibilidad sea mejor


//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routers
app.use('/api/movies',require('./routers/index'));


app.listen(app.get('port'), () => {
     console.log(`server on port ${3000}`);
});
