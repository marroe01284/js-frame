import { Outlet } from "react-router-dom";
export function Profile(){
    return (
        <>
            <h1>Profile Page</h1>
            <p>this is the profile page</p>
            <Outlet />
        </>
        
    )
}