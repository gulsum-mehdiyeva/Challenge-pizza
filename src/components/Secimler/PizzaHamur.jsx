export default function PizzaHamur({ formData, setFormData }) {
  
  function handleHamurBoyutSec(e) {
    setFormData({ ...formData, hamur: e.target.value });
  }

  return (
    <div className="hamur-secim">
      <div className="hamur-baslik">
        Hamur Seç <span style={{ color: 'red' }}>*</span>
      </div>
      <select
        id="hamur"
        name="hamur"
        value={formData.hamur}
        onChange={handleHamurBoyutSec}
      >
        <option value="">Hamur Kalınlığı</option>
        <option value="İnce">İnce</option>
        <option value="Kalın">Kalın</option>
      </select>
    </div>
  );
}