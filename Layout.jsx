import { Outlet } from "react-router-dom";
import { SideBar } from "./src/Componets/SideBar";

export function Layout () {
    return (
        <>
            <SideBar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}