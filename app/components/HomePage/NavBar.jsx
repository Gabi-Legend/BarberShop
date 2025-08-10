import styles from "@/app/components/HomePage/NavBar.module.css";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav>
      <h1>BarberShop</h1>
      <ul>
        <li>
          <Link href="#">Acasa</Link>
        </li>
        <li>
          <Link href="#">Programare</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
