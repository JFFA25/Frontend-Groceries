import { useEffect, useState } from "react";
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

interface TableProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const Table = ({ products, setProducts }: TableProps) => {
  useEffect(() => {
    axios
      .get("http://192.168.1.70:5000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los productos", error);
      });
  }, [setProducts]);

  const handleDelete = async (barcode: string) => {
    try {
      await axios.delete(`http://192.168.1.70:5000/products/${barcode}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.barcode !== barcode)
      );
      console.log("Producto eliminado");
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h2>Lista de Productos</h2>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Código de Barras</th>
                <th>Descripción</th>
                <th>Marca</th>
                <th>Costo</th>
                <th>Precio</th>
                <th>Caducidad</th>
                <th>Existencias</th>
                <th>Acciones</th> {/* Columna para el botón de eliminar */}
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product) => (
                  <tr key={product.barcode}>
                    {" "}
                    {/* Usar el barcode como key */}
                    <td>{product.barcode}</td>
                    <td>{product.description}</td>
                    <td>{product.brand}</td>
                    <td>${product.cost.toFixed(2)}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>{new Date(product.expiredDate).toLocaleDateString()}</td>
                    <td>{product.stock}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(product.barcode)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center">
                    No hay productos disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
