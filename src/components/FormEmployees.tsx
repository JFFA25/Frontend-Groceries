import { useState } from "react";
import axios from "axios";

interface Employee {
  id: string;
  name: string;
  position: string;
  salary: number;
}

interface FormEmployeesProps {
  addEmployee: (employee: Employee) => void;
}

export const FormEmployees = ({ addEmployee }: FormEmployeesProps) => {
  const [employee, setEmployee] = useState<Employee>({
    id: "",
    name: "",
    position: "",
    salary: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.1.70:5000/employees", employee);
      console.log("Empleado guardado:", response.data);
      addEmployee(response.data);
      setEmployee({
        id: "",
        name: "",
        position: "",
        salary: 0,
      });
    } catch (error) {
      console.error("Error al enviar empleado:", error);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h3>Registro de Empleados</h3>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 mb-3">
              <label className="form-label">ID</label>
              <input type="text" name="id" className="form-control" value={employee.id} onChange={handleChange} />
            </div>
            <div className="col-lg-6 mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" name="name" className="form-control" value={employee.name} onChange={handleChange} />
            </div>
            <div className="col-lg-6 mb-3">
              <label className="form-label">Posición</label>
              <input type="text" name="position" className="form-control" value={employee.position} onChange={handleChange} />
            </div>
            <div className="col-lg-6 mb-3">
              <label className="form-label">Salario</label>
              <input type="number" name="salary" className="form-control" value={employee.salary} onChange={handleChange} />
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

export default FormEmployees;