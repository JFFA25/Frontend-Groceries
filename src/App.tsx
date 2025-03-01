import './App.css'
import { useState } from 'react';
import { Form } from './components/Form'
import { Navbar } from './components/Navbar'
import Table from './components/Table'

interface Product {
  barcode: string;
  description: string;
  brand: string;
  cost: number;
  price: number;
  expiredDate: string;
  stock: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <Navbar />
          <div className="col-lg-5">
            <Form addProduct={addProduct} />
          </div>
          <div className="col-lg-7">
            <Table products={products} setProducts={setProducts} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
