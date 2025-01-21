// Ana bileşeni oluşturacağımız React uygulaması
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

export default function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Hoş Geldiniz!</h1>
        <p>Otomatik Kapı Sistemlerinde Lider Firma</p>
      </header>
      <main className="main-content">
        <section className="about">
          <h2>Hakkımızda</h2>
          <p>
            Firmamız, yenilikçi ve güvenilir otomatik kapı çözümleri
            sunmaktadır. Modern teknolojiyi kullanarak, işletmeniz için mükemmel
            kapı sistemlerini tasarlıyoruz.
          </p>
        </section>
        <section className="services">
          <h2>Hizmetlerimiz</h2>
          <ul>
            <li>Fotoselli Kapılar</li>
            <li>Endüstriyel Kapılar</li>
            <li>Garaj Kapıları</li>
            <li>Hızlı Geçiş Sistemleri</li>
          </ul>
        </section>
        <section className="contact">
          <h2>İletişim</h2>
          <p>
            Bizimle iletişime geçmek için:{" "}
            <a href="mailto:info@otomatik-kapi.com">info@otomatik-kapi.com</a>
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Otomatik Kapı Sistemleri. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
