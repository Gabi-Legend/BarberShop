import styles from "@/app/programare/page.module.css";
import NavBar from "../components/HomePage/NavBar";
import Image from "next/image";

export default function Programare() {
  const servicii = [
    {
      title: "Tuns Modern",
      price: "60 RON",
      img: "/images/tuns_modern.jpg",
      desc: "Tuns adaptat tendințelor actuale, potrivit stilului tău personal.",
    },
    {
      title: "Tuns Clasic",
      price: "50 RON",
      img: "/images/tuns_clasic.jpg",
      desc: "Un look clasic, mereu la modă, cu finisaj impecabil.",
    },
    {
      title: "Bărbierit Tradițional",
      price: "40 RON",
      img: "/images/barbierit.jpg",
      desc: "Ras cu briciul și prosop cald, experiență relaxantă.",
    },
    {
      title: "Tuns + Bărbierit",
      price: "90 RON",
      img: "/images/tuns_barbierit.jpg",
      desc: "Pachet complet pentru un look îngrijit și fresh.",
    },
  ];

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        {servicii.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={service.img}
                alt={service.title}
                fill
                className={styles.image}
              />
            </div>
            <h2 className={styles.title}>{service.title}</h2>
            <p className={styles.desc}>{service.desc}</p>
            <div className={styles.footer}>
              <span className={styles.price}>{service.price}</span>
              <button className={styles.bookBtn}>Rezervă</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
