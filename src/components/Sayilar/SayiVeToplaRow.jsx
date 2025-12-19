import SiparisSayi from "./SiparisSayi";
import SiparisToplami from "./SiparisToplami";

export default function SayiVeToplaRow({ formData, setFormData }) {
  return (
    <div className="secim-row sayi-toplam-row">
      <SiparisSayi formData={formData} setFormData={setFormData} />
      <SiparisToplami
        secimler={formData.ekstralarFiyati}
        toplam={formData.siparisSayi * (formData.pizzaFiyati + formData.ekstralarFiyati)}
      />
    </div>
  );
}