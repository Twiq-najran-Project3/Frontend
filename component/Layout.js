import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}
