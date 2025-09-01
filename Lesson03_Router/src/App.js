import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreateCRUB from "./component/createCRUB"
import ReadCRUB from "./component/readCRUB"
import Layout from "./component/layout"
import NoPage from "./component/nopage"



const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Layout/>}>
                    <Route index element = {<ReadCRUB/>}/>
                    <Route path = "create" element = {<CreateCRUB/>}/>
                    <Route path = "*" element = {<NoPage/>}/>
                </Route>
            </Routes>
            </BrowserRouter>
    )
}
export default App;