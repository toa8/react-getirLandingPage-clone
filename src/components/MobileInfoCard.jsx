import React from "react";
// STYLE
import styles from "../styles/mobileinfocard.module.css";

const MobileInfoCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSide}>
        <div className={styles.texts}>
          <p
            className={styles.text}
            style={{ fontSize: "26px", fontWeight: "700" }}
          >
            Getir'i indirin!
          </p>
          <p className={styles.text} style={{ fontSize: "16px" }}>
            İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
          </p>
        </div>

        <div className={styles.mobileLinks}>
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
      <div className="imgSide">
        <img
          src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
          alt=""
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default MobileInfoCard;
