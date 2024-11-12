import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>Causes</li>
          <li>Shop</li>
          <li>Pages</li>
          <li>Blog </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>

      <div>
        <button onClick={() => navigate("/donate")}>Donate now</button>
        <div>Search</div>
      </div>
    </header>
  );
};
