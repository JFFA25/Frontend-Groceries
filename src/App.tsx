import './App.css'
import { Form } from './components/Form'
import { Navbar } from './components/Navbar'
import Table from './components/Table'

function App() {
  return (
    <>
    <div className="container">
      <div className="row mb-3">
        {/*Aqui va la llamada al componente de la Nvar */}
        <Navbar/>
        <div className="col-lg-5">
          {/* Aqui va la llamada del componente para el formulario */}
          <Form/>
          {/* <a href="" className='btn btn-primary'>Aceptar</a> */}
        </div>
        <div className="col-lg-7">
          {/* Aqui va la llamada al componente para la tabla */}
          <Table/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
