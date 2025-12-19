import './SiparisOnay.css';

export default function SiparisOnayi({ formData }) {
  return (
    <div className="success-page">
      <header className="success-header">
        Teknolojik Yemekler
      </header>
      <main className="success-message">
        <p>{formData.siparisMesaji || "TEBRİKLER! SİPARİŞİNİZ ALINDI!"}</p>
      </main>
    </div>
  );
}