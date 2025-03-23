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
        <div className="scroll-container overflow-x-auto whitespace-nowrap p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Otomatik Kapı Modelleri</h2>

            <div className="scroll-container overflow-x-auto whitespace-nowrap p-4 bg-gray-100 rounded-lg shadow-lg">
                {kapiModelleri.map((kapi, index) => (
                    <div key={index} className="bg-white inline-block p-4 shadow-lg rounded-lg mx-2 w-2/4">
                        <img src={kapi.img} alt={`Otomatik Kapı Model ${index + 1}`} className="h-64 object-cover"/>
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
