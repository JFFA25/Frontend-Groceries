import { useEffect, useState } from "react";
import axios from "axios";

// Definir el tipo de producto
interface Product {
  barcode: string;
  description: string;
  brand: string;
  cost: number;
  price: number;
  expiredDate: string;
  stock: number;
}

export const Table = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error al cargar los productos");
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (barcode: string) => {
    try {
      await axios.delete(`http://localhost:5000/products/${barcode}`);
      setProducts(products.filter((product) => product.barcode !== barcode)); // Filtrar usando el barcode
      console.log("Producto eliminado");
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Lista de Productos</h2>
      <table className="table">
        <thead>
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
                    className="btn btn-danger"
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
  );
};

export default Table;
