require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Conectar a MongoDB usando la variable de entorno
const mongoPaco = process.env.MONGO_PACO;
mongoose.connect(mongoPaco, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conectado a MongoDB"))
    .catch(err => console.error("Error al conectar a MongoDB:", err));

// Definir esquema y modelo
const ProductSchema = new mongoose.Schema({
    barcode: String,
    description: String,
    brand: String,
    cost: Number,
    price: Number,
    expiredDate: Date,
    stock: Number
});

const Product = mongoose.model("Product", ProductSchema);

// Ruta para obtener productos
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find(); // Obtiene los productos de MongoDB
        res.json(products);
    } catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).json({ error: "Error al obtener productos" });
    }
});

// Ruta para agregar productos
app.post("/products", async (req, res) => {
    try {
        console.log("Datos recibidos:", req.body);
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error("Error al guardar:", error);
        res.status(500).json({ error: "Error al guardar el producto" });
    }
});

// Ruta para eliminar un producto por su barcode
app.delete("/products/:barcode", async (req, res) => {
    const { barcode } = req.params; // Obtener el barcode desde la URL
    try {
        const product = await Product.findOneAndDelete({ barcode }); // Eliminar el producto por su barcode
        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.status(200).json({ message: "Producto eliminado" });
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        res.status(500).json({ error: "Error al eliminar el producto" });
    }
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
