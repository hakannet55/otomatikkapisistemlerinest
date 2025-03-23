// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

export default function ContactForm() {
    return (
        <form action="https://formspree.io/f/mrbpqjpe"
              method="POST" className="max-w-md mx-auto">
            <select className="w-full p-2 mb-3 border rounded"
                                id="talep" name="talep">
                {["Fiyat Alımı", "Parça Sorgulama", "Montaj Talebi"].map((label, index) => (
                    <option key={index} value={label}>
                        {label}
                    </option>
                ))}</select>
            <input type="email" placeholder="E-posta" className="w-full p-2 mb-3 border rounded"/>
            <textarea name="message" placeholder="Mesajınız" className="w-full p-2 mb-3 border rounded"></textarea>
            <button className="bg-blue-900 text-white px-6 py-2 rounded">Gönder</button>
        </form>
    );
}
