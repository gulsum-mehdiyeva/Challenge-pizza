export default function SiparisNotu({ formData, setFormData }) {

  function handleSiparisNotuDegis(e) {
    setFormData({ ...formData, siparisNotu: e.target.value });
  }

  function handleNotKaydet() {
    setFormData({ ...formData, notKaydedildi: true });
  }

  return (
    <div className="siparis-notu">
      <div className="not-baslik">Sipariş Notu</div>

      {!formData.notKaydedildi ? (
        <>
                   <textarea
                   name="ozel"
            className="siparis-notu-textarea"
            value={formData.siparisNotu || ""}
            onChange={handleSiparisNotuDegis}
            placeholder="Siparişe eklemek istediğiniz bir not var mı?"
            rows={2}
          />
          <button
  className="not-kaydet-button"
  onClick={handleNotKaydet}
  disabled={!formData.siparisNotu}  // not boşsa devre dışı
>
  Notu Kaydet
</button>
        </>
      ) : (
        <p>Not: {formData.siparisNotu}</p>
      )}
    </div>
  );
}