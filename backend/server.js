require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*', // Permitir todas las solicitudes de origen
}));

// Conectar a MongoDB usando la variable de entorno
const mongoPaco = process.env.MONGO_PACO;
mongoose.connect(mongoPaco)
    .then(() => console.log("Conectado a MongoDB"))
    .catch(err => console.error("Error al conectar a MongoDB:", err));

// Definir esquemas y modelos
const ProductSchema = new mongoose.Schema({
    barcode: String,
    description: String,
    brand: String,
    cost: Number,
    price: Number,
    expiredDate: Date,
    stock: Number
});

const EmployeesSchema = new mongoose.Schema({
    id: String,
    name: String,
    position: String,
    salary: Number
});

const CustomerSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    phone: String
});

const Product = mongoose.model("Product", ProductSchema);
const Employees = mongoose.model("Employees", EmployeesSchema);
const Customer = mongoose.model("Customer", CustomerSchema);

// Rutas para productos
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find(); // Obtiene los productos de MongoDB
        res.json(products);
    } catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).json({ error: "Error al obtener productos" });
    }
});

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

// Rutas para empleados
app.get("/employees", async (req, res) => {
    try {
        const employees = await Employees.find(); // Obtiene los empleados de MongoDB
        res.json(employees);
    } catch (error) {
        console.error("Error al obtener empleados:", error);
        res.status(500).json({ error: "Error al obtener empleados" });
    }
});

app.post("/employees", async (req, res) => {
    try {
        console.log("Datos recibidos:", req.body);
        const newEmployee = new Employees(req.body);
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        console.error("Error al guardar:", error);
        res.status(500).json({ error: "Error al guardar el empleado" });
    }
});

app.delete("/employees/:id", async (req, res) => {
    const { id } = req.params; // Obtener el id desde la URL
    try {
        const employee = await Employees.findOneAndDelete({ id }); // Eliminar el empleado por su id
        if (!employee) {
            return res.status(404).json({ error: "Empleado no encontrado" });
        }
        res.status(200).json({ message: "Empleado eliminado" });
    } catch (error) {
        console.error("Error al eliminar empleado:", error);
        res.status(500).json({ error: "Error al eliminar el empleado" });
    }
});

// Rutas para clientes
app.get("/customers", async (req, res) => {
    try {
        const customers = await Customer.find(); // Obtiene los clientes de MongoDB
        res.json(customers);
    } catch (error) {
        console.error("Error al obtener clientes:", error);
        res.status(500).json({ error: "Error al obtener clientes" });
    }
});

app.post("/customers", async (req, res) => {
    try {
        console.log("Datos recibidos:", req.body);
        const newCustomer = new Customer(req.body);
        await newCustomer.save();
        res.status(201).json(newCustomer);
    } catch (error) {
        console.error("Error al guardar:", error);
        res.status(500).json({ error: "Error al guardar el cliente" });
    }
});

app.delete("/customers/:id", async (req, res) => {
    const { id } = req.params; // Obtener el id desde la URL
    try {
        const customer = await Customer.findOneAndDelete({ id }); // Eliminar el cliente por su id
        if (!customer) {
            return res.status(404).json({ error: "Cliente no encontrado" });
        }
        res.status(200).json({ message: "Cliente eliminado" });
    } catch (error) {
        console.error("Error al eliminar cliente:", error);
        res.status(500).json({ error: "Error al eliminar el cliente" });
    }
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Servidor corriendo en el puerto ${PORT}`));
