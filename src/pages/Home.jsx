import ParallaxSection from "../components/paralax.jsx";

export default function Home(){
    return (<>
        {/* Hero Bölümü */}
        <header className="bg-cover bg-center h-[400px] flex items-center justify-center text-white text-4xl font-bold" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?automatic-door)' }}>
            <div className="bg-black bg-opacity-50 p-6 rounded-xl">Otomatik Kapıda Güven ve Kalite</div>
        </header>
        <ParallaxSection></ParallaxSection>
        {/* Kurumsal */}
        <section
            style={{
                backgroundImage: "url('https://www.cakmakyapipvc.com/upload/otomatikkapi.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
            className="borderAnimation p-8 text-center"
        ><h2 className="text-3xl font-semibold text-blue-900 mb-4">Kurumsal</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-4">
                 Otomatik Kapı olarak yıllardır sektörde öncü firmalar arasında yer almaktayız. Kalite, güvenlik ve müşteri memnuniyetini ön planda tutarak, modern çözümler sunuyoruz.
            </p>
            <div className="max-w-3xl mx-auto text-left">
                <h3 className="text-2xl text-blue-800 font-semibold mb-2">Misyonumuz</h3>
                <p className="text-gray-700 mb-4">Otomatik kapı sistemlerinde en yüksek kaliteyi sunarak müşterilerimizin güvenini kazanmak ve sürekli yenilikçi çözümler üretmek.</p>
                <h3 className="text-2xl text-blue-800 font-semibold mb-2">Vizyonumuz</h3>
                <p className="text-gray-700">Türkiye'nin en güvenilir otomatik kapı markası olmak ve dünya çapında tanınan bir firma haline gelmek.</p>
            </div>
        </section>

        {/* Ürünlerimiz */}
        <section className="p-8 bg-gray-200 text-center">
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">Ürünlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { name: "Fotoselli Kapılar", description: "Yoğun giriş çıkışın olduğu alanlar için tasarlanmış, güvenli ve estetik kapılar." },
                    { name: "Endüstriyel Kapılar", description: "Fabrikalar, depolar ve büyük tesisler için yüksek dayanıklılığa sahip kapılar." },
                    { name: "Hızlı PVC Kapılar", description: "Hava akışını kontrol etmek ve enerji tasarrufu sağlamak için kullanılan esnek kapılar." },
                    { name: "Yangın Kapıları", description: "Acil durumlarda yangına dayanıklı malzemeden üretilmiş, yüksek güvenlik sağlayan kapılar." },
                    { name: "Giyotin Cam Kapılar", description: "Modern ve şık tasarıma sahip, uzaktan kumanda ile açılıp kapanabilen cam kapılar." },
                    { name: "Otomatik Garaj Kapıları", description: "Ev ve iş yerleri için motorlu ve uzaktan kumandalı garaj kapıları." }
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