export default function EkMalzemeler({ formData, setFormData }) {
    const malzemeler = [
        'Pepperoni',
        'Tavuk Izqara',
        'Mısır',
        'Sarımsak',
        'Ananas',
        'Sosis',
        'Soğan',
        'Sucuk',
        'Biber',
        'Kabak',
        'Kanada Jambonu',
        'Domates',
        'Jalepeno',
        ];

    function handleToppingChange(e) {
    const { value, checked } = e.target;
    const extraPrice = 5; 

    if (checked) {
        setFormData({
            ...formData,
            ekstralar: [...formData.ekstralar, value],
            ekstralarFiyati: formData.ekstralarFiyati + extraPrice
        });
    } else {
        setFormData({
            ...formData,
            ekstralar: formData.ekstralar.filter(m => m !== value),
            ekstralarFiyati: formData.ekstralarFiyati - extraPrice
        });
    }
}
    return (
    <div className="ekstra-malzemeler">
      <div className="ekstra-baslik">Ek Malzemeler</div>
      <p>En fazla 10 malzeme seçe bilirsiniz. 5₺</p>
      <div className="malzeme-grid">
        {malzemeler.map((malzeme) => (
          <label key={malzeme}>
            <input
              type="checkbox"
              name="malzeme"
              value={malzeme}
              checked={formData.ekstralar.includes(malzeme)}
              onChange={handleToppingChange}
              disabled={
                !formData.ekstralar.includes(malzeme) &&
                formData.ekstralar.length >= 10
              }
            />{' '}
            {malzeme}
          </label>
        ))}
      </div>
    </div>
  );
}