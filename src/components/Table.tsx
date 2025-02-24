export const Table = () =>{
    return(
        <>
        <table className="table table-primary table-striped">
            <thead>
                <th>Codigo de barras</th>
                <th>Descripcion</th>
                <th>Marca</th>
                <th>Costo</th>
                <th>Precio</th>
                <th>Caducidad</th>
                <th>Existencias</th>
                <th colSpan={2}>Operaciones</th>
            </thead>
        </table>
        </>
    )
}
export default Table;