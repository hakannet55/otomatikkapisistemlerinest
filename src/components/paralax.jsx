import React from 'react';
import { Parallax } from 'react-parallax';
import './paralax.css';

const ParallaxSection = () => {
    return (
        <Parallax bgImage="https://doortas.com.tr/wp-content/uploads/2021/05/dorma-fiyat-1024x768.jpeg" strength={500}>
            <div className="bgblur parallax-content">
                <h1>Fotoselli Kapı Özellikleri</h1>
                <p>Fotoselli kapılar, bina girişlerinde enerji tasarrufu sağlamak ve güvenliği üst seviyede tutmak amacıyla kullanılır. Aşağıda fotoselli kapıların başlıca özelliklerini bulabilirsiniz:</p>
                <ul>
                    <li><strong>Enerji Tasarrufu:</strong> Kapılar, yalnızca gerektiğinde açılıp kapanarak enerji tasarrufu sağlar.</li>
                    <li><strong>Güvenlik:</strong> Otomatik kilit sistemleri ile güvenliği artırır.</li>
                    <li><strong>Pratik Kullanım:</strong> Hastaneler, oteller, AVM'ler, mağazalar gibi kalabalık mekanlar için idealdir.</li>
                    <li><strong>Estetik Görünüm:</strong> Genellikle saydam cam olarak kullanılır ve modern bir görünüm sunar.</li>
                    <li><strong>Fiyat Değişkenliği:</strong> Cam boyutuna göre fiyatlar değişiklik gösterir, bu nedenle net bir ücret belirtmek zordur.</li>
                </ul>
            </div>
        </Parallax>
    );
};

export default ParallaxSection;
