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
                        <p className="text-2xl">
                            Çorlu Tekirdağ bölgesinde otomatik kapı ve fabrika kapıları konusunda uzmanız.
                            Müşterilerimize en yüksek kalitede otomatik geçiş sistemleri sunmaktayız.
                            Ürün yelpazemiz, endüstriyel tesislerde, ticari alanlarda ve konutlarda güvenliği ve
                            işlevselliği artırmak için tasarlanmış çeşitli otomatik kapıları
                            ve geçiş sistemlerini içermektedir. Modern teknolojiyle donatılmış otomatik kapılarımız,
                            enerji verimliliği ve dayanıklılık sağlarken, estetik açıdan da
                            her türlü mimari yapıya uyum sağlar. Profesyonel ekibimiz, ihtiyaçlarınıza en uygun
                            çözümleri sunmak için her zaman hazırdır. Bizimle çalışarak,
                            güvenli, pratik ve şık kapı sistemlerine sahip olabilirsiniz.
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