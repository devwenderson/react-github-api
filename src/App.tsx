import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
