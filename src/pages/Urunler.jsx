import './referans.css';
import Modal from "react-modal";
import OpenModal from "../components/openmodal.jsx";
import {useState} from "react";

export default function Referanslar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [text, setText] = useState('');
    const references = [
        {
            title: "Ürünler",
            description: "Çorlu Seksiyonel Garaj | Çorlu Panjur | Çorlu Kepenk Sistemleri | Dairesel Bahçe Kapısı | Fotoselli Kapı | Bariyer Sistemleri | Endüstriyel Fabrika Kapıları | Hızlı PVC Kapı | Kepenk Sistemleri",
            imageUrl: "img/kapi1.jpg"
        },
        {
            title: "Seksiyonel Garaj Kapıları",
            description: "Dayanıklı, güvenli ve kullanışlı seksiyonel garaj kapıları. Otomatik ve manuel seçenekler.",
            imageUrl: "img/a1.jpg"
        },
        {
            title: "Panjur Sistemleri",
            description: "Eviniz ve iş yeriniz için yüksek kaliteli panjur sistemleri. Otomatik ve manuel kontrol.",
            imageUrl: "img/a2.jpg"
        },
        {
            title: "Kepenk Sistemleri",
            description: "Güvenlik ve estetiği bir arada sunan kepenk sistemleri. Çeşitli renk ve model seçenekleri.",
            imageUrl: "img/a3.jpg"
        },
        {
            title: "Dairesel Bahçe Kapıları",
            description: "Bahçeleriniz için estetik ve güvenliği bir arada sunan dairesel kapı sistemleri.",
            imageUrl: "img/a4.jpg"
        },
        {
            title: "Fotoselli Kapılar",
            description: "Hassas ve hızlı açılma kapasiteli fotoselli kapılar. Otomatik kapı sistemleri.",
            imageUrl: "img/a5.jpg"
        },
        {
            title: "Bariyer Sistemleri",
            description: "Araç giriş-çıkış kontrolü sağlayan güvenilir bariyer sistemleri.",
            imageUrl: "img/a1.jpg"
        },
        {
            title: "Endüstriyel Fabrika Kapıları",
            description: "Fabrikalar ve endüstriyel tesisler için dayanıklı ve güvenli kapı çözümleri.",
            imageUrl: "img/a2.jpg"
        },
        {
            title: "Hızlı PVC Kapılar",
            description: "Hızlı ve güvenli geçiş sağlayan PVC kapı sistemleri. Endüstriyel kullanım için ideal.",
            imageUrl: "img/a3.jpg"
        },
        {
            title: "Otomatik Kepenkler",
            description: "İş yerleri ve garajlar için otomatik kepenk sistemleri. Yüksek güvenlik ve kullanım kolaylığı.",
            imageUrl: "img/a4.jpg"
        },
        {
            title: "Yangın Kapıları",
            description: "Yangın güvenliği sağlayan dayanıklı kapı sistemleri. Endüstriyel ve ticari binalar için.",
            imageUrl: "img/kapi1.jpg"
        },
        {
            title: "Kayar Kapılar",
            description: "Kompakt ve kullanışlı kayar kapı sistemleri. Hem iç hem dış mekanlar için.",
            imageUrl: "img/a2.jpg"
        },
        {
            title: "Hermetik Kapılar",
            description: "Hijyen ve güvenlik gerektiren alanlar için hermetik kapı çözümleri.",
            imageUrl: "img/a3.jpg"
        },
        {
            title: "Yüksek Hızlı Kapılar",
            description: "Endüstriyel alanlarda hızlı geçiş sağlayan kapı sistemleri. Yüksek performans ve dayanıklılık.",
            imageUrl: "img/kapi1.jpg"
        },
        {
            title: "Otomatik Bahçe Kapıları",
            description: "Bahçeleriniz için otomatik açılabilir kapı sistemleri. Yüksek güvenlik ve estetik.",
            imageUrl: "img/a1.jpg"
        }
    ];

    const fingImg=(e)=>{
        e= e.querySelector('img');
        return e && e.getAttribute('src');
    }

    const fingText = (e) => {
        if(e.classList.contains('wp-main-wrapper-inner')){
            return e.innerHTML;
        }
    }

    const larger = (t) => {
        const path=fingImg(t.target.parentElement) || fingImg(t.target.parentElement.parentElement);
        const text=fingText(t.target.parentElement) || fingText(t.target.parentElement.parentElement);
        setModalIsOpen(true);
        setText(text);
        setCurrentImage(path);
    }

    return (
        <div>
            <div className="p-8 bg-gray-100">
                <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-800 shadow-lg">Öne Çıkan
                    Ürünlerimiz</h1>
                <div className="container mx-auto p-4 flex flex-wrap flex-col content-center">

                    {references.map((ref, index) => (
                        <div key={index} style={{maxWidth: '720px'}}
                             className="wp-main-wrapper-inner bg-white p-4 rounded-lg shadow-md mb-4 items-center">
                            <img src={ref.imageUrl} alt={ref.title}
                                 className="w-100 h-32 object-cover rounded-md mr-4"/>
                            <a href='#' onClick={larger}>
                                <h2 className="text-2xl font-semibold mb-2">{ref.title}</h2>
                                <p>{ref.description}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            {modalIsOpen && <OpenModal open={modalIsOpen} html={text}></OpenModal>}
        </div>
    );
}
