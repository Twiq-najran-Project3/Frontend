import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
