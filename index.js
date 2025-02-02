require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

// Configurar carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});
