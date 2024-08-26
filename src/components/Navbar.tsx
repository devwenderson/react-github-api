import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to={"/"}>Início</Link>
      <Link to={"/sobre/"}>Sobre</Link>
    </nav>
  );
};

export default Navbar;
