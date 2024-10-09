import { Link } from "react-router-dom";
import "./navigation.css";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">
        <img
          className="navigation-logo"
          src="/about/logo.png"
          alt="logo-wawe"
        />
      </Link>
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/">О нас</Link>
        </li>
        <li className="navigation-item">
          <Link to="/servises">Услуги и цены</Link>
        </li>
        <li className="navigation-item">
          <Link to="/team">Команда</Link>
        </li>
        <li className="navigation-item">
          <Link to="/contacts">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
};
