import { useState } from "react";
import { Menu } from "lucide-react";
import KurumsalPage from "./pages/KurumsalPage.jsx";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Iletisim from "./pages/iletisim.jsx";
import Home from "./pages/Home.jsx";
import './App.css';
import BusinessCard from "./components/BusinessCard.jsx";
import OtomatikKapiModelleri from "./components/ModelsComponents.jsx";

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <BrowserRouter> {/* BrowserRouter ile uygulamayı sarmalayın */}
            <div className="font-sans bg-gray-100 min-h-screen">
                {/* Navbar */}
                <nav className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-md">
                    <a href="/"
                       className="flex items-center justify-center p-1 border-2 border-gray-400 rounded-md shadow-sm hover:shadow-md transition duration-300">
                        <h1 className="bg-white p-1 text-lg font-bold text-gray-800 transition duration-300 hover:text-gray-600">
                            <span className="text-blue-500">Çorlu</span><span className="text-red-500">OtomatikKapı</span>
                            <div style={{fontSize:'13px',letterSpacing: '3px',textAlign: 'center',color: '#535353',fontStyle: 'italic'}}>Geçiş Sistemleri</div>
                        </h1>
                    </a>
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <Menu size={40}/>
                    </button>
                    <ul className={`md:flex gap-6 ${menuOpen ? "block absolute top-16 left-0 w-full bg-blue-900 p-4 shadow-md" : "hidden md:flex"}`}>
                        {['Anasayfa', 'Kurumsal', 'Ürünlerimiz', 'Referanslar', 'İletişim'].map((item, indx) => (
                            <li key={indx} className="hover:text-blue-300 cursor-pointer">
                                <Link to={indx !== 0 ? item : '/'}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="garage-door-info shadow2 bgSizeClass" style={{backgroundImage: 'url(img/images.jpg)'}}>
                    <div className="p-6 max-sm:p-0 garage-door-info-sub bgblur shadow2">
                        <BusinessCard/>

                        <p className="text-white cursor-pointer p-1 sub hover:scale-105 transition duration-300">
                        Alüminyum ve çelik profillerden üretilen otomatik kapılar, dış cephenize uygun renk seçenekleri
                        ile estetiği,
                        sessiz çalışma ve uzaktan kumanda ile kullanım özelliği ile konforu, dış etkilere karşı yüksek
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
                <div className="shadow" style={{display:"flex",justifyContent:'center',background: 'lightblue'}}>
                    <OtomatikKapiModelleri/>
                </div>
                <br/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Kurumsal" element={<KurumsalPage/>}/>
                    <Route path="/İletişim" element={<Iletisim/>}/>
                </Routes>

                {/* İletişim */}
                <section className="p-8 bg-gray-200 text-center">
                    <h2 className="text-3xl font-semibold text-blue-900 mb-4">İletişim</h2>
                    <form className="max-w-md mx-auto">
                        <input type="text" placeholder="Adınız" className="w-full p-2 mb-3 border rounded"/>
                        <input type="email" placeholder="E-posta" className="w-full p-2 mb-3 border rounded"/>
                        <textarea placeholder="Mesajınız" className="w-full p-2 mb-3 border rounded"></textarea>
                        <button className="bg-blue-900 text-white px-6 py-2 rounded">Gönder</button>
                    </form>
                </section>
            </div>
        </BrowserRouter>
    );
}
