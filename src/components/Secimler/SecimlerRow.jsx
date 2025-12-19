import PizzaBoyut from './PizzaBoyut';
import PizzaHamur from './PizzaHamur';

export default function SecimRow({ formData, setFormData }) {
  return (
    <div className="secim-row">
      <PizzaBoyut formData={formData} setFormData={setFormData} />
      <PizzaHamur formData={formData} setFormData={setFormData} />
    </div>
  );
}