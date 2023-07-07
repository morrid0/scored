import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

export const Header = () => {
  return (
    <header>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
