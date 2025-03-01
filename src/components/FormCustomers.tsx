import { useState } from "react";
import axios from "axios";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface FormCustomersProps {
  addCustomer: (customer: Customer) => void;
}

export const FormCustomers = ({ addCustomer }: FormCustomersProps) => {
  const [customer, setCustomer] = useState<Customer>({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.1.70:5000/customers", customer);
      console.log("Cliente guardado:", response.data);
      addCustomer(response.data);
      setCustomer({
        id: "",
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error al enviar cliente:", error);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h3>Registro de Clientes</h3>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 mb-3">
              <label className="form-label">ID</label>
              <input type="text" name="id" className="form-control" value={customer.id} onChange={handleChange} />
            </div>
            <div className="col-lg-6 mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" name="name" className="form-control" value={customer.name} onChange={handleChange} />
            </div>
            <div className="col-lg-6 mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" value={customer.email} onChange={handleChange} />
            </div>
            <div className="col-lg-6 mb-3">
              <label className="form-label">Teléfono</label>
              <input type="text" name="phone" className="form-control" value={customer.phone} onChange={handleChange} />
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

export default FormCustomers;