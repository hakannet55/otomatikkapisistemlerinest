
export default function Referanslar() {
    const references = [
        {
            title: "Çorlu Otomatik Kapı Sistemleri",
            description: "Çorlu Seksiyonel Garaj | Çorlu Panjur | Çorlu Kepenk Sistemleri | Dairesel Bahçe Kapısı | Fotoselli Kapı | Bariyer Sistemleri | Endüstriyel Fabrika Kapıları | Hızlı PVC Kapı | Kepenk Sistemleri",
            imageUrl: "img/a4.jpg"
        },
        {
            title: "İstanbul Otel Giriş Kapıları",
            description: "İstanbul'daki otel girişlerinde kullanılan otomatik kapı sistemleri.",
            imageUrl: "img/a3.jpg"
        },
        {
            title: "Çorlu Fabrika ve Merkezi Kapıları",
            description: "Çorlu'da bulunan fabrika ve ticari merkezler için enerji verimli ve dayanıklı kapı çözümleri. Güçlü yapıları ve modern tasarımları ile endüstriyel tesislerde ve ticari alanlarda güvenliği ve işlevselliği artırır.",
            imageUrl: "img/a2.jpg"
        },
        {
            title: "Ofis ve Giriş Kapıları",
            description: "Şık ve modern ofis giriş kapıları, enerji tasarrufu sağlayan otomatik sistemler. Ofislerinizin ve binalarınızın estetik görünümünü tamamlayan, güvenli ve kullanışlı kapı çözümleri.",
            imageUrl: "img/a1.jpg"
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Referanslar</h1>
            {references.map((ref, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
                    <img src={ref.imageUrl} alt={ref.title} className="w-32 h-32 object-cover rounded-md mr-4" />
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">{ref.title}</h2>
                        <p>{ref.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
