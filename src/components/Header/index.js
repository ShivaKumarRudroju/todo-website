import { Link } from "react-router-dom";
import './index.css'

function Header() {
  return (
    <div className="header">
      <Link to="/cartpage" className="link">
        <p>Cart</p>
      </Link>
      <Link to="/collectionpage" className="link">
        <p>collectionpage</p>
      </Link>
      <Link to="/productpage" className="link">
        <p>Productpage</p>
      </Link>
      <Link to="/user" className="link">
        <p>User</p>
      </Link>
    </div>
  );
}
export default Header;
