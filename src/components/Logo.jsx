import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/">
      <img alt="WorlTraveller logo" className={styles.logo} />
    </Link>
  );
};

export default Logo;
