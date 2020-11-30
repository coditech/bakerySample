import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="main-menu">
      <div className="container">
        <div className="head-nav">
          <span className="menu"> </span>
          <ul>
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <div className="clearfix"> </div>
          </ul>
        </div>

        <div className="logo">
          <Link to="/">
            <img src="images/logo.png" title="Sweetcake" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
