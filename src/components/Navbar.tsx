export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mi Aplicación</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Empleados</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Clientes</a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <img src="https://via.placeholder.com/40" alt="Foto de perfil" className="rounded-circle" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};