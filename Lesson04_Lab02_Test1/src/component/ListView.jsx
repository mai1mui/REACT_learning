

const ListView = (props) => (
    <div className="listView">
        <table align='center'><tbody>
            <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Price</th>
                <th colSpan={2}>Action</th>
            </tr>

            {props.cars.length > 0 ? (
                props.cars.map(car => (
                    <tr key = {car.id} onClick={() => props.getRow(car)}>
                        <td>{car.brand}</td>
                        <td>{car.model}</td>
                        <td>{car.price}</td>
                        <td><button onClick={() => props.getRow(car)} className="btn btn-warning">Edit</button></td>
                        <td><button onClick={() => {
                            if(window.confirm("Delete the item")) {
                                props.deleteCar(car.id)
                            }
                        }} className="btn btn-danger">Delete</button></td>
                    </tr>
                ))
            ):(
            <tr>
                <td colspan={5}>No any car!</td>
            </tr>    
            )}
        </tbody></table>
    </div>
)
export default ListView