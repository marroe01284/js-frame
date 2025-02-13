import { Layout } from "../layout";
import { Outlet } from "react-router-dom";

export function About (){
    return (
        <>
            <h1>New About page</h1>
            <p>this is our new klasmf</p>
            <Outlet />
        </>
        
    )
}