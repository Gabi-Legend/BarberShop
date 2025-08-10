"use client";
import { useState } from "react";
import styles from "@/app/components/HomePage/NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>BarberShop</h1>

      <ul className={`${styles.pages} ${isOpen ? styles.active : ""}`}>
        <li>
          <Link href="/">Acasa</Link>
        </li>
        <li>
          <Link href="#">Programare</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
