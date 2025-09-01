const ReadCRUB = () => {
    return(
        <div>
                <div align="right">
                    <form action="">
                        <input type="text" placeholder ="Enter your search" size={40}/>
                        <button>Search</button>
                    </form>
                </div>
                <div>
                    <table border = {1} width = "100%">
                        <caption><h1>Item list</h1></caption>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Function</th>
                        </tr>
                        <tr>
                            <td>I16</td>
                            <td>Iphone 16</td>
                            <td>999</td>
                            <td>
                                <button><a href="">Edit </a></button>
                                <button><a href="">Delete</a></button> 
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
}
export default ReadCRUB;