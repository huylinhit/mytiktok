import Header from "./Sidebar";
import Siderbar from "./Header";
function DefaultLayout({children}) {
    return ( 
        <>
            <Header />
            <div className="container">
                <Siderbar/>
                <div className="content">{children}</div>
            </div>
        </> 
    );
}

export default DefaultLayout;