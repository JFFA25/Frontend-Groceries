import './App.css'

function App() {
  return (
    <>
    <div className="container">
      <div className="row">
        {/*Aqui va la llamada al componente de la Nvar */}
        <h1>Nvbar</h1>
        <div className="col-lg-5">
          {/* Aqui va la llamada del componente para el formulario */}
          <h1>Formulario de registro</h1>
          {/* <a href="" className='btn btn-primary'>Aceptar</a> */}
        </div>
        <div className="col-lg-7">
          {/* Aqui va la llamada al componente para la tabla */}
          <h1>Tabla para productos</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
