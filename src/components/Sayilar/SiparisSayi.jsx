export default function SiparisSayi({ formData, setFormData }) {

    function azalt() {
    if (formData.siparisSayi > 1) {
        setFormData({
            ...formData,
            siparisSayi: formData.siparisSayi - 1
        });
    }
}

function artir() {
    setFormData({
        ...formData,
        siparisSayi: formData.siparisSayi + 1
    });
}

    return (
        <div className="siparis-sayi">
           
            <div className="sayi-kontrol">
                <button type="button" onClick={azalt}>-</button>
                <span className="sayi-deger">{formData.siparisSayi}</span>
                <button type="button" onClick={artir}>+</button>
            </div>
        </div>
    );
}