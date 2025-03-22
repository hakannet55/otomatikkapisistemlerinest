import React from 'react';

const kapiModelleri = [
    {
        img: "img/kapi1.jpg",
        title: "Seksiyonel Kapı",
        description: "Yüksek kaliteli, dayanıklı ve estetik seksiyonel kapı modeli."
    },
    {
        img: "img/kapi2.jpg",
        title: "Fotoselli Kapı",
        description: "Modern ve kullanışlı fotoselli kapı çözümü."
    },
    {
        img: "./img/kapi3.jpg",
        title: "Endüstriyel Kapı",
        description: "Dayanıklı ve güvenli endüstriyel otomatik kapı sistemi."
    },
    // Daha fazla kapı modeli ekleyebilirsiniz
];

const OtomatikKapiModelleri = () => {
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Otomatik Kapı Modelleri</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {kapiModelleri.map((kapi, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={kapi.img} alt={`Otomatik Kapı Model ${index + 1}`} className="w-full h-64 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{kapi.title}</h3>
                            <p className="text-gray-600">{kapi.description}</p>
                            <button className="Detaylar mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Detaylar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtomatikKapiModelleri;
