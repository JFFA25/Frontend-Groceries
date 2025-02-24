export const Form = () => {
    return (
      <>
      <div className="card">
          <div className="card-header">
              <h3>Registro de Productos</h3>
          </div>
          <div className="card-body">
              <form action="">
                  <div className="row">
                      <div className="col-lg-6">
                          <label htmlFor="txtBarcode" className="form-label">Código de barras</label>
                          <input type="text" id="txtBarcode" className="form-control" name="barcode"/>
                      </div>
                      <div className="col-lg-6">
                          <label htmlFor="txtBrand" className="form-label">Marca</label>
                          <input type="text" id="txtBrand" className="form-control" name="brand"/>
                      </div>
                      <div className="col-lg-6">
                          <label htmlFor="txtPrice" className="form-label">Precio de Compra</label>
                          <input type="text" id="txtPrice" className="form-control" name="price"/>
                      </div>
                      <div className="col-lg-6">
                          <label htmlFor="txtStock" className="form-label">Stock</label>
                          <input type="text" id="txtStock" className="form-control" name="stock"/>
                      </div>
                      <div className="col-lg-6">
                          <label htmlFor="txtCost" className="form-label">Costo</label>
                          <input type="text" id="txtCost" className="form-control" name="cost"/>
                      </div>
                      <div className="col-lg-6">
                          <label htmlFor="txtExpiredDate" className="form-label">Fecha de Expiracion</label>
                          <input type="text" id="txtExpiredDate" className="form-control" name="expiredDate"/>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <button type="submit" className="btn btn-primary mt-3">Aceptar</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
      </>
    )
}

export default Form;

