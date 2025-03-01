import { useState } from "react";
import axios from "axios";

interface Product {
  barcode: string;
  description: string;
  brand: string;
  cost: number;
  price: number;
  expiredDate: string;
  stock: number;
}

interface FormProps {
  addProduct: (product: Product) => void;
}

export const Form = ({ addProduct }: FormProps) => {
  const [product, setProduct] = useState<Product>({
    barcode: "",
    description: "",
    brand: "",
    cost: 0,
    price: 0,
    expiredDate: "",
    stock: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.1.10:5000/products", product);
      console.log("Producto guardado:", response.data);
      addProduct(response.data);
      setProduct({
        barcode: "",
        description: "",
        brand: "",
        cost: 0,
        price: 0,
        expiredDate: "",
        stock: 0
      });
    } catch (error) {
      console.error("Error al enviar producto:", error);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h3>Registro de Productos</h3>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 mb-3">
              <label className="form-label">Código de barras</label>
              <input type="text" name="barcode" className="form-control" value={product.barcode} onChange={handleChange} />
            </div>
            <div className="col-lg-6 mb-3">
              <label className="form-label">Descripción</label>
              <input type="text" name="description" className="form-control" value={product.description} onChange={handleChange} />
            </div>
            <div className="col-lg-6 mb-3">
              <label className="form-label">Marca</label>
              <input type="text" name="brand" className="form-control" value={product.brand} onChange={handleChange} />
            </div>
            <div className="col-lg-6 mb-3">
              <label className="form-label">Costo</label>
              <input type="number" name="cost" className="form-control" value={product.cost} onChange={handleChange} />
            </div>
            <div className="col-lg-6 mb-3">
              <label className="form-label">Precio</label>
              <input type="number" name="price" className="form-control" value={product.price} onChange={handleChange} />
            </div>
            <div className="col-lg-6 mb-3">
              <label className="form-label">Caducidad</label>
              <input type="date" name="expiredDate" className="form-control" value={product.expiredDate} onChange={handleChange} />
            </div>
            <div className="col-lg-6 mb-3">
              <label className="form-label">Existencias</label>
              <input type="number" name="stock" className="form-control" value={product.stock} onChange={handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <button type="submit" className="btn btn-success mt-3">Aceptar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

