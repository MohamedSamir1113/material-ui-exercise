import { Button } from "react-bootstrap";
import { Link, Outlet ,Navigate, useNavigate} from "react-router-dom";
function Contacts() {
    const navigate=useNavigate()
  return (
    <div>
      Contacts
      <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"red",width:"10%"}}>
        <Link to="tab1">tab1</Link> 
        <Link to="tab2">tab2</Link>
        </div>


        <Outlet/>
        <Button variant="warning" onClick={()=>navigate("/")}>go Back to Home</Button>
    </div>
  );
}

export default Contacts;
