import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Form } from './components/Form';
import { FormEmployees } from './components/FormEmployees';
import { FormCustomers } from './components/FormCustomers';
import { Navbar } from './components/Navbar';
import Table from './components/Table';
import TableEmployees from './components/TableEmployees';
import TableCustomers from './components/TableCustomers';

interface Product {
  barcode: string;
  description: string;
  brand: string;
  cost: number;
  price: number;
  expiredDate: string;
  stock: number;
}

interface Employee {
  id: string;
  name: string;
  position: string;
  salary: number;
}

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);

  const addProduct = (product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const addEmployee = (employee: Employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  const addCustomer = (customer: Customer) => {
    setCustomers((prevCustomers) => [...prevCustomers, customer]);
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-5">
            <Routes>
              <Route path="/productos" element={<Form addProduct={addProduct} />} />
              <Route path="/empleados" element={<FormEmployees addEmployee={addEmployee} />} />
              <Route path="/clientes" element={<FormCustomers addCustomer={addCustomer} />} />
            </Routes>
          </div>
          <div className="col-lg-7">
            <Routes>
              <Route path="/productos" element={<Table products={products} setProducts={setProducts} />} />
              <Route path="/empleados" element={<TableEmployees employees={employees} setEmployees={setEmployees} />} />
              <Route path="/clientes" element={<TableCustomers customers={customers} setCustomers={setCustomers} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
