const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/adminproductos", {
    useNewUrlParser: true,
	useUnifiedTopology: true
})
    .then(()=> console.log("Conectado a DB"))
    .catch(err => console.log("Error al conectarse con DB", err))