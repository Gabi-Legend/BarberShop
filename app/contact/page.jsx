import styles from "@/app/contact/page.module.css";
import NavBar from "../components/HomePage/NavBar";

export default function Contact() {
  return (
    <>
      <NavBar />
      <div className={styles.contactContainer}>
        <div className={styles.contactCard}>
          <h1 className={styles.contactTitle}>Pagina de Contact</h1>

          <div>
            <label className={styles.contactLabel}>Email</label>
            <input type="email" className={styles.contactInput} />
          </div>

          <div>
            <label className={styles.contactLabel}>Mesaj</label>
            <textarea rows={4} className={styles.contactTextarea}></textarea>
          </div>

          <button className={styles.trimite}>Trimite</button>
        </div>
      </div>
    </>
  );
}
