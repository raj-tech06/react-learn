import { Link , Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>

<Link to="home">Home</Link> 
<Link to="About">About</Link> 
<Link to="Contact">Contact</Link>

<hr />
<Outlet />
<hr />
esdefytghuijkiugftdrs
        </>
    )
  }
  export default Layout;

