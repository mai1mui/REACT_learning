import logo from "./img/logo04.png"
const Heading = () => {
    return(
        <div>
            <table>
                <tr>
                    <td>
                        <img src={logo} alt="" width={200} />
                    </td>
                    <td width={200}></td>
                    <td>
                        <h1>Best Book Library</h1>
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default Heading;