"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./page.module.css";

export default function RezervaPage() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !time) {
      alert("Te rog să alegi o dată și o oră.");
      return;
    }

    alert(
      `Rezervare confirmată!\nServiciu: ${service}\nNume: ${name}\nTelefon: ${phone}\nData: ${date.toLocaleDateString()} ${time}`
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Rezervă: {service}</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Nume complet"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="tel"
            placeholder="Număr telefon"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className={styles.input}
          />

          <div className={styles.datePickerWrapper}>
            <label className={styles.label}>Alege data</label>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              placeholderText="Selectează data"
              className={styles.datePicker}
            />
          </div>

          <div className={styles.datePickerWrapper}>
            <label className={styles.label}>Alege ora</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className={styles.select}
            >
              <option value="">Selectează ora</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
            </select>
          </div>

          <button type="submit" className={styles.button}>
            Confirmă rezervarea
          </button>
        </form>
      </div>
    </div>
  );
}
