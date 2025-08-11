import styles from "@/app/contact/page.module.css";
import NavBar from "../components/HomePage/NavBar";

export default function Contact() {
  return (
    <>
      <NavBar />
      <div className={styles.contactContainer}>
        <div className={styles.contactCard}>
          <h1 className={styles.contactTitle}>Contact BarberShop Lux</h1>

          <div className={styles.infoSection}>
            <p className={styles.infoItem}>
              📍 Str. Mihai Eminescu 12, Botoșani
            </p>
            <p className={styles.infoItem}>
              📞 <a href="tel:+40999123456">+40 999 123 456</a>
            </p>
            <p className={styles.infoItem}>
              💬{" "}
              <a
                href="https://wa.me/40999123456"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </p>
            <p className={styles.infoItem}>✉ contact@barbershoplux.ro</p>
            <p className={styles.infoItem}>🕒 Luni - Sâmbătă: 09:00 - 19:00</p>
          </div>
        </div>
      </div>
    </>
  );
}
