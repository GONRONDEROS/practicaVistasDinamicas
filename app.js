const express = require("express");
const app = express();

const mainRoute = require("./routes/mainRoute");
const productRoute = require("./routes/productsRoute");

const path = require("path");

app.use(express.static(path.join(__dirname, "./public")));

app.set('view engine', 'ejs');



app.use("/", mainRoute);
app.use("/detail", productRoute);

app.listen(3000, (req, res) => {
    console.log("Servidor corriendo exitosamente en http://localhost:3000");
})