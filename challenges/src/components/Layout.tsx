import { Outlet } from "react-router-dom";
import Menu from "./Menu";

import "../assets/css/menu.css"

function Layout() {
    return (
        <>
        <div className="menuWrapper">
            <Menu/>
        </div>
        <div className="contentWrapper">
            <Outlet />
        </div>
        </>
    )
}
export default Layout;