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

    </div>)
}
