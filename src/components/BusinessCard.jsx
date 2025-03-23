import React from 'react';
import './BusinessCard.css';

const BusinessCard = () => {
    return (
        <div className="">
            <div className="business-card flex justify-center">
                <div className="card-content">
                    <section

                        className="contact-info text-xl font flex flex-wrap flex-col items-center justify-center text-center">
                        <h2 className="font-bold text-2xl mb-4 name border-bcrimson">Çorlu Tekirdağ Bölgesi Otomatik Kapı ve Fabrika
                            Kapıları</h2>
                        <p className="text-xl">
                            Çorlu Tekirdağ bölgesinde otomatik kapı ve fabrika kapıları konusunda uzmanız. Müşterilerimize yüksek kaliteli, enerji verimli ve dayanıklı otomatik geçiş sistemleri sunuyoruz. Ürünlerimiz, endüstriyel tesisler, ticari alanlar ve konutlar için tasarlanmıştır. Modern teknolojili kapılarımız estetik açıdan her türlü mimariye uyum sağlar. Profesyonel ekibimiz ihtiyaçlarınıza en uygun çözümleri sunmak için hazırdır. Güvenli, pratik ve şık kapı sistemleri için bize ulaşın.

                        </p>
                    </section>
                    <p className=" text-center">Çorlu Otomatik Kapı Sistemleri</p>
                    <h1 className="text-center hover:scale-105 transition duration-300 cursor-pointer">Volkan Kuru</h1>
                    <div className="text-xl font contact-info flex flex-wrap flex-row items-center justify-center">
                        <div>Çağrı İçin Lütfen Tıklayınız.</div>
                        <a href="tel:+905422755559" className="bg-amber-100 flex items-center">
                            &#9742; +90 542 275 55 59
                        </a>
                        <p>&#x1F4CD; Çorlu, Tekirdağ</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;
