import Logo from "./Logo";
import AppNavigation from "./AppNavigation";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNavigation />

      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldTraveller Inc.
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
