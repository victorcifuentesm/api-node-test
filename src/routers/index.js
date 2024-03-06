const {Router} = require('express');
const router = Router();

const data = require ('../data-tes.json');
//console.log(data);
router.get('/',(req,res) => {
    //res.send('Hola Mundo'); // aca estamos enviado como string el resultado
//    res.json({"id": "1",
//    "name": "batman the dark nigth",
//    "genero": "drama"});
    res.json(data.mejores);
});

module.exports = router;