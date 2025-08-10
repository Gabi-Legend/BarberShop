import styles from "@/app/components/HomePage/Main.module.css";
import Image from "next/image";
import BarberLogo from "@/app/assets/barber_logo.avif";

export default function Main() {
  return (
    <div className={styles.main_container}>
      <Image src={BarberLogo} alt="Logo" className={styles.logo_photo} />

      <div className={styles.desc}>
        <h1 className={styles.title}>BarberShop Lux</h1>
        <p className={styles.subtitle}>
          Experiență premium de tuns și bărbierit, cu stil și atenție la
          detalii. Îți oferim servicii personalizate, produse de calitate și o
          atmosferă relaxantă pentru un look impecabil.
        </p>
      </div>
    </div>
  );
}
