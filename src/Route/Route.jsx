
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Pages/Footer";
import { useEffect } from "react";


const Route = () => {
    const loc = useLocation();
    useEffect(() => {
        if (loc.pathname === '/') {
            document.title = 'SharePlenty | Home'
        }
        else {
            document.title = `SharePlenty ${ loc.pathname.replace('/', '| ') }`
        }
        if (loc.pathname === '/featuredfoods') {
            document.title = 'SharePlenty | Featured Foods'
        }
        if (loc.state) {
            document.title = `SharePlenty || ${ loc.state }`
        }
    }, [loc.pathname, loc.state]);


    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="mt-10 ">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Route;