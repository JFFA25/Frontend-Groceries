import { useState } from "react";
import axios from "axios";

export const Form = () => {
    const [product, setProduct] = useState({
        barcode: "",
        description: "",
        brand: "",
        cost: "",
        price: "",
        expiredDate: "",
        stock: ""
    });

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/products", product);
            console.log("Producto guardado:", response.data);
        } catch (error) {
            console.error("Error al enviar producto:", error);
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                <h3>Registro de Productos</h3>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <label className="form-label">Código de barras</label>
                            <input type="text" name="barcode" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label">Descripción</label>
                            <input type="text" name="description" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label">Marca</label>
                            <input type="text" name="brand" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label">Costo</label>
                            <input type="number" name="cost" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label">Precio</label>
                            <input type="number" name="price" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label">Caducidad</label>
                            <input type="date" name="expiredDate" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label">Existencias</label>
                            <input type="number" name="stock" className="form-control" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <button type="submit" className="btn btn-primary mt-3">Aceptar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default Form;

