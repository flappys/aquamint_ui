import { useLocation } from "react-router-dom";

function Notfound(){
    const location=useLocation()
    console.log(location.pathname)
    return <p>Not Found</p>
}

export default Notfound;