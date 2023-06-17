import styles from "../page.module.css";
import LoginForm from "@/app/components/login/LoginForm";
import Navbar from "../components/navbar/Navbar";

export default function Page() {
  return (
    <main className={styles.main}>
      <LoginForm />
      <Navbar />
    </main>
  );
}
