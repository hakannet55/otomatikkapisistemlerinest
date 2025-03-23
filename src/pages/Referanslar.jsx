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
        const path=fingImg(t.target.parentElement) || fingImg(t.target.parentElement.parentElement)
        const text=fingText(t.target.parentElement) || fingText(t.target.parentElement.parentElement)
        setText(text)
        setCurrentImage(path);
        setModalIsOpen(true);
    }

    return (
        <div>
            <div className="container mx-auto p-4 flex flex-wrap flex-col content-center">
                <h1 className="text-3xl font-bold mb-4">Referanslar</h1>
                {references.map((ref, index) => (
                    <div key={index} style={{maxWidth: '720px'}}
                         className="wp-main-wrapper-inner bg-white p-4 rounded-lg shadow-md mb-4 items-center">
                        <img src={ref.imageUrl} alt={ref.title} className="w-100 h-32 object-cover rounded-md mr-4"/>
                        <a href='#' onClick={larger}>
                            <h2 className="text-2xl font-semibold mb-2">{ref.title}</h2>
                            <p>{ref.description}</p>
                        </a>
                    </div>
                ))}
            </div>
            {modalIsOpen && <OpenModal open={modalIsOpen} html={text} ></OpenModal>}
        </div>
    );
}
