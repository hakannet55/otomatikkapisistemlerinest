import {useEffect, useState} from "react";
import { Menu } from "lucide-react";
import KurumsalPage from "./pages/KurumsalPage.jsx";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Iletisim from "./pages/iletisim.jsx";
import Home from "./pages/Home.jsx";
import './App.css';
import Referanslar from "./pages/Referanslar.jsx";
import Modal from 'react-modal';
import OpenModal from "./components/openmodal.jsx";
import Urunler from "./pages/Urunler.jsx";

Modal.setAppElement('#root');

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');


    useEffect(() => {
        const handleClick = (t) => {
            const a=t.target.parentElement.parentElement.querySelector('img')
            setCurrentImage(a.getAttribute('src'));
            setModalIsOpen(true);
        };

        const buttons = document.getElementsByClassName('Detaylar');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', handleClick);
        }

        // Cleanup function to remove the event listeners when the component unmounts
        return () => {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].removeEventListener('click', handleClick);
            }
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount


    return (
        <BrowserRouter> {/* BrowserRouter ile uygulamayı sarmalayın */}
            <div className="font-sans bg-gray-100 min-h-screen">
                {/* Navbar */}
                <nav className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-md">
                    <a href="/"
                       className="flex items-center justify-center p-1 border-2 border-gray-400 rounded-md shadow-sm hover:shadow-md transition duration-300">
                        <h1 className="bg-white p-1 text-lg font-bold text-gray-800 transition duration-300 hover:text-gray-600">
                            <span className="text-blue-500">Çorlu</span><span
                            className="text-red-500">OtomatikKapı</span>
                            <div style={{
                                fontSize: '13px',
                                letterSpacing: '3px',
                                textAlign: 'center',
                                color: '#535353',
                                fontStyle: 'italic'
                            }}>Geçiş Sistemleri
                            </div>
                        </h1>
                    </a>
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <Menu size={40}/>
                    </button>
                    <nav className="relative">
                        <ul className={`md:flex gap-6 ${menuOpen ? "block absolute top-16 left-0 w-full bg-blue-900 p-4 shadow-md" : "hidden md:flex"}`}>
                            {['Anasayfa', 'Ürünlerimiz', 'Referanslar', 'Kurumsal', 'İletişim'].map((item, indx) => (
                                <li key={indx} className="hover:text-blue-300 cursor-pointer">
                                    <Link to={indx !== 0 ? item : '/'} aria-label={`Navigate to ${item}`} title={`Navigate to ${item}`}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </nav>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Kurumsal" element={<KurumsalPage/>}/>
                    <Route path="/İletişim" element={<Iletisim/>}/>
                    <Route path="/Referanslar" element={<Referanslar/>}/>
                    <Route path="/Ürünlerimiz" element={<Urunler/>}/>
                </Routes>

                {/* İletişim */}
            </div>
            <footer className="bg-blue-900 text-white p-4">
                <p className="text-center">© 2025 Çorlu Otomatik Kapı Geçiş Sistemleri. Tüm hakları saklıdır.</p>
            </footer>
            {modalIsOpen && <OpenModal open={modalIsOpen} close={()=>setModalIsOpen(false)} img={currentImage} ></OpenModal>}
        </BrowserRouter>
    );
}
