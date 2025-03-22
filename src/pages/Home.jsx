import ParallaxSection from "../components/paralax.jsx";
import BusinessCard from "../components/BusinessCard.jsx";
import OtomatikKapiModelleri from "../components/ModelsComponents.jsx";

export default function Home(){
    return (<>
        <div className="garage-door-info shadow2 bgSizeClass" style={{backgroundImage: 'url(img/images.jpg)'}}>
            <div className="p-6 max-sm:p-0 garage-door-info-sub bgblur shadow2">
                <BusinessCard/>

                <p className="text-white cursor-pointer p-1 sub hover:scale-105 transition duration-300">
                    Alüminyum ve çelik profillerden üretilen otomatik kapılar, dış cephenize uygun renk
                    seçenekleri
                    ile estetiği,
                    sessiz çalışma ve uzaktan kumanda ile kullanım özelliği ile konforu, dış etkilere karşı
                    yüksek
                    mukavemeti ile
                    güvenliği sizlere bir arada sunmaktadır.
                </p>

                <p className="text-white cursor-pointer p-1 sub hover:scale-105 transition duration-300">
                    Elektrik kesintisi durumunda da manuel olarak kapınızı açıp-kapatabilir, dilerseniz
                    kesintisiz
                    güç kaynağı
                    kullanarak da kapınızı otomatik olarak çalıştırabilir, uzaktan kumanda kullanımı yanında,
                    anahtar veya butonla
                    da kapınızı kontrol edebilirsiniz.
                </p>

                <p className="text-white cursor-pointer p-1 sub hover:scale-105 transition duration-300">
                    Garajınızı ya da işyerinizi, her türlü hava şartlarından, hırsızlık ve zarar verme amaçlı
                    yapılan fiziksel
                    etkilerden korumak için, üstün güvenlik sistemiyle donatılmış, uzun ömürlü, rollmina Garaj
                    Kapısı Sistemlerini
                    güvenle binalarınıza uygulayabilirsiniz.
                </p>
            </div>
        </div>
        <div className="shadow" style={{display: "flex", justifyContent: 'center', background: 'lightblue'}}>
            <OtomatikKapiModelleri/>
        </div>
        <br/>
        {/* Hero Bölümü */}
        <header className="bg-cover bg-center h-[400px] flex items-center justify-center text-white text-4xl font-bold"
                style={{backgroundImage: 'url(img/images.jpg)'}}>
            <div className="bg-black bg-opacity-50 p-6 rounded-xl">Otomatik Kapıda Güven ve Kalite</div>
        </header>
        <ParallaxSection></ParallaxSection>

        {/* Ürünlerimiz */}
        <section className="p-8 bg-gray-200 text-center">
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">Ürünlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    {
                        name: "Fotoselli Kapılar",
                        description: "Yoğun giriş çıkışın olduğu alanlar için tasarlanmış, güvenli ve estetik kapılar."
                    },
                    {
                        name: "Endüstriyel Kapılar",
                        description: "Fabrikalar, depolar ve büyük tesisler için yüksek dayanıklılığa sahip kapılar."
                    },
                    {
                        name: "Hızlı PVC Kapılar",
                        description: "Hava akışını kontrol etmek ve enerji tasarrufu sağlamak için kullanılan esnek kapılar."
                    },
                    {
                        name: "Yangın Kapıları",
                        description: "Acil durumlarda yangına dayanıklı malzemeden üretilmiş, yüksek güvenlik sağlayan kapılar."
                    },
                    {
                        name: "Giyotin Cam Kapılar",
                        description: "Modern ve şık tasarıma sahip, uzaktan kumanda ile açılıp kapanabilen cam kapılar."
                    },
                    {
                        name: "Otomatik Garaj Kapıları",
                        description: "Ev ve iş yerleri için motorlu ve uzaktan kumandalı garaj kapıları."
                    }
                ].map((product) => (
                    <div key={product.name} className="bg-white p-4 shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-800">{product.name}</h3>
                        <p className="text-gray-600">{product.description}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Referanslar */}
        <section className="p-8 bg-white text-center">
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">Referanslar</h2>
            <p className="text-gray-700">Türkiye'nin dört bir yanında birçok projeye imza attık.</p>
        </section>
    </>)
}
