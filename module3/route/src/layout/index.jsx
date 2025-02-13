import { Footer } from "./footer";
import { Header } from "./header";
import { Outlet } from "react-router-dom";
function Layout() {
    return (
    <>
    {/* create a new pat "profile" that uses the layout component
    link to it ad´nd display a h1  with profile */}
    
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow">
        <Outlet />
        </main>
    </div>
        <Footer />
    </>
    )
}

export { Header, Footer, Layout }