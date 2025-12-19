export default function PizzaBoyut({ formData, setFormData }) {

  function handlePizzaBoyutSec(e) {
    setFormData({ ...formData, boyut: e.target.value });
  }

  return (
    <div className="boyut-secim">
      <div className="boyut-baslik">
        Boyut Seç <span style={{ color: 'red' }}>*</span>
      </div>
      <label>
        <input
          type="radio"
          name="boyut"
          value="kucuk"
          checked={formData.boyut === 'kucuk'}
          onChange={handlePizzaBoyutSec}
        />{' '}
        Küçük
      </label>
      <label>
        <input
          type="radio"
          name="boyut"
          value="orta"
          checked={formData.boyut === 'orta'}
          onChange={handlePizzaBoyutSec}
        />{' '}
        Orta
      </label>
      <label>
        <input
          type="radio"
          name="boyut"
          value="buyuk"
          checked={formData.boyut === 'buyuk'}
          onChange={handlePizzaBoyutSec}
        />{' '}
        Büyük
      </label>
    </div>
  );
}