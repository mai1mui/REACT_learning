

const ListView = (props) => (
    <div className="listView">
        <table align='center'><tbody>
            <tr>
                <th>School</th>
                <th>Industry</th>
                <th>Year</th>
                <th colSpan={2}>Action</th>
            </tr>

            {props.peoples.length > 0 ? (
                props.peoples.map(people => (
                    <tr key = {people.id} onClick={() => props.getRow(people)}>
                        <td>{people.school}</td>
                        <td>{people.industry}</td>
                        <td>{people.year}</td>
                        <td><button onClick={() => props.getRow(people)} className="btn btn-warning">Edit</button></td>
                        <td><button onClick={() => {
                            if(window.confirm("Delete the item ?")) {
                                props.deletePeople(people.id)
                            }
                        }} className="btn btn-danger">Delete</button></td>
                    </tr>
                ))
            ):(
            <tr>
                <td colspan={5}>No information!</td>
            </tr>    
            )}
        </tbody></table>
    </div>
)
export default ListView
