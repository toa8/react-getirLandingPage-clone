import React from "react";
// STYLE
import styles from "../styles/cardssection.module.css";

const CardsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
            alt=""
          />
          <p style={{ color: "#5d3ebc", fontWeight: "600", fontSize: "20px" }}>
            Her siparişinize bir kampanya
          </p>
          <p style={{ textAlign: "center", color: "#697488" }}>
            Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src="	https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
            alt=""
          />
          <p style={{ color: "#5d3ebc", fontWeight: "600", fontSize: "20px" }}>
            Dakikalar içinde kapınızda
          </p>
          <p style={{ textAlign: "center", color: "#697488" }}>
            Getir’le siparişiniz dakikalar içinde kapınıza gelir.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src="	https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
            alt=""
          />
          <p style={{ color: "#5d3ebc", fontWeight: "600", fontSize: "20px" }}>
            Binlerce çeşit mutluluk
          </p>
          <p style={{ textAlign: "center", color: "#697488" }}>
            Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
