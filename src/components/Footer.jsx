import React from "react";
// STYLE
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.mobileLinks}>
          <p style={{ color: "rgb(93, 62, 188)", fontSize: "20px" }}>
            Getir'i İndirin!
          </p>
          <div>
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt="appstore"
            />
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt="googleplay"
            />
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt="appgallery"
            />
          </div>
        </div>
        <div className={styles.card}>
          <p style={{ color: "rgb(93, 62, 188)", fontSize: "20px" }}>
            Getir'i keşfedin
          </p>
          <a href="/">Hakkımızda</a>
          <a href="/">Kariyer</a>
          <a href="/">Teknoloji Kariyerleri</a>
          <a href="/">İletişim</a>
          <a href="/">Sosyal Sorumluluk Projeleri</a>
        </div>
        <div className={styles.card}>
          <p style={{ color: "rgb(93, 62, 188)", fontSize: "20px" }}>
            Yardıma mı ihtiyacınız var?
          </p>
          <a href="/">Sıkça Sorulan Sorular</a>
          <a href="/">Kişisel Verilerin Korunması</a>
          <a href="/">Gizlilik Politikası</a>
          <a href="/">Kullanım Koşulları</a>
          <a href="/">Çerez Politikası</a>
        </div>
        <div className={styles.card}>
          <p style={{ color: "rgb(93, 62, 188)", fontSize: "20px" }}>
            İş Ortağımız Olun
          </p>
          <a href="/">Bayimiz Olun</a>
          <a href="/">Deponuzu Kiralayın</a>
          <a href="/">GetirYemek Restoranı Olun</a>
          <a href="/">GetirÇarşı İşletmesi Olun</a>
          <a href="/">Zincir Restoranlar</a>
        </div>
      </div>
      <div
        style={{
          color: "rgb(82, 82, 82)",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          fontSize: "13px",
        }}
      >
        © 2022{" "}
        <a
          href="https://github.com/toa8"
          target={"_blank"}
          style={{ color: "rgb(82, 82, 82)" }}
        >
          toa8
        </a>
      </div>
    </div>
  );
};

export default Footer;
