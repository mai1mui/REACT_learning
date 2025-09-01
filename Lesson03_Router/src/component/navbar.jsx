import {Link} from "react-router-dom";
const NavBar = () => {
    return(
        <div>
            <table>
                <tr>
                    <td>
                        <Link to = "/">
                        <button className="btn btn-info">Home</button>
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to = "create">
                        <button className="btn btn-info">Add Book</button>
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link>
                        <button className="btn btn-info">Utilities</button>
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link>
                        <button className="btn btn-info">About</button>
                        </Link>
                    </td>
                </tr>

            </table>
        </div>
    );
}
export default NavBar;