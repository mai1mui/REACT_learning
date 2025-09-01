//1.install react-router-dom
import {Outlet} from "react-router-dom"
import Heading from "./heading"
import NavBar from "./navbar"
const Layout = () => {
    return(
        <div>
            <div className="location-1-1">
                <Heading/> {/*heading: logo, title*/}
            </div>
            <div className="location-1-2"></div>
            <div className="location-2-1">
                <NavBar/>{/*vertical navbar from the left*/}
            </div>
            <div className="location-2-2">
                <Outlet/>
            </div>
        </div>
    )
}
export default Layout;