import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-3">
        <div className="container">
          <a className="navbar-brand" href="#">Tienda Mordo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item me-5">
                <Link className="nav-link active" aria-current="page" to="/productos">Productos</Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" to="/empleados">Empleados</Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" to="/clientes">Clientes</Link>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <span className="text-white fw-bold me-2">Usuario: Mordecai Cangrejo</span>
            <img src="./src/images/Mordo.jpg" alt="Foto de perfil" className="rounded-circle" width="40" height="40" />
          </div>
        </div>
      </nav>
    </>
  );
};