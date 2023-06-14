import Header from './/components/header/Header'
import Footer from './components/footer/Footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

        <Header />
        <Footer />

    </main>
  )
}
