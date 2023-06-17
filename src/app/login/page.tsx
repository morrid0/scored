import styles from "../page.module.css";
import Conta from "../components/conta/Conta";
import Navbar from "../components/navbar/Navbar";

export default function Page() {
  return (
    <main className={styles.main}>
      <Conta />
      <Navbar />
    </main>
  );
}