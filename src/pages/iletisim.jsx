export default function Iletisim(){
    return (<div>

        <section className="p-8 bg-gray-200 text-center">
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">İletişim</h2>
            <form className="max-w-md mx-auto">
                <input type="text" placeholder="Adınız" className="w-full p-2 mb-3 border rounded"/>
                <input type="email" placeholder="E-posta" className="w-full p-2 mb-3 border rounded"/>
                <textarea placeholder="Mesajınız" className="w-full p-2 mb-3 border rounded"></textarea>
                <button className="bg-blue-900 text-white px-6 py-2 rounded">Gönder</button>
            </form>
        </section>
        <div className="text-xl font contact-info flex flex-wrap flex-row items-center justify-center">
            <div>Çağrı İçin Lütfen Tıklayınız.</div>
            <a href="tel:+905422755559" className="bg-amber-100 flex items-center">☎ +90 542 275 55 59</a><p>📍 Çorlu,
            Tekirdağ</p></div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7694.32483418407!2d27.781372073193217!3d41.15979069559515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4af00f15b1a3d%3A0x8c5b6f4e8d3c8d3e!2s%C3%87orlu%2C%20Tekirda%C4%9F!5e0!3m2!1str!2str!4v1696351766442!5m2!1str!2str&zoom=15"
            height="450"
            className="shadow-2xl"
            style={{border: 0,margin:'auto',width:'90%',borderRadius:'20px'}}
            allowFullScreen=""
            loading="lazy">
        </iframe>
    </div>)
}
