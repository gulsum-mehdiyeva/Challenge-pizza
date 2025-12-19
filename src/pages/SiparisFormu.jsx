import './SiparisFormu.css';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import PizzaTanim from '../components/PizzaTanim';
import EkMalzemeler from '../components/EkMalzemeler';
import SiparisNotu from '../components/SiparisNotu';
import SecimRow from '../components/Secimler/SecimlerRow';
import SayiVeToplaRow from '../components/Sayilar/SayiVeToplaRow';
import axios from 'axios';

export default function SiparisFormu({ formData, setFormData }) {
  const history = useHistory();

  function handleChange(e) {
    const name = e.target.value;
    setFormData({ ...formData, isim: name });
  }

  function handleClick() {
    if (formData.isim.length >= 3) {
      setFormData({ ...formData, aktive: true });
    } 
  }

  function handleSiparisVer(e) {
    e.preventDefault();

    const toplam = (formData.pizzaFiyati + formData.ekstralarFiyati) * formData.siparisSayi;

    const gonderilecekler = {
      isim: formData.isim,
      boyut: formData.boyut,
      hamur: formData.hamur,
      malzemeler: formData.ekstralar,
      not: formData.siparisNotu,
      adet: formData.siparisSayi,
      toplam: toplam,
    };

    axios.post('https://reqres.in/api/pizza', gonderilecekler, {
      headers: { 'x-api-key': 'reqres-free-v1' }
    })
    .then(() => {
      history.push('/siparis-onayi', { mesaj: `${formData.isim}, siparişiniz alındı!` });
    })
    .catch(err => console.error(err));
  }

  return (
    <div className="page">
      <Header 
        className="header-onay" 
        breadcrumb={
          <div className="breadcrumb">
            <Link to="/">Anasayfa</Link>
            <span> / Sipariş Oluştur</span>
          </div>
        } 
      />

      <main className="page-content">
        <div className="form-container">
          {!formData.aktive && (
            <>
              <input
                type="text"
                name="isim" 
                value={formData.isim}
                onChange={handleChange}
                placeholder="İsminizi girin"
              />

              <button
                className="buton-devam"
                disabled={formData.isim.length < 3}
                onClick={handleClick}
              >
                Devam Edin
              </button>
            </>
          )}

          {formData.aktive && (
            <div className="form-message">
              {formData.isim}, lütfen siparişinizi oluşturun!
            </div>
          )}
        </div>

        <PizzaTanim />
        <SecimRow formData={formData} setFormData={setFormData} />
        <EkMalzemeler formData={formData} setFormData={setFormData} />
        <SiparisNotu formData={formData} setFormData={setFormData} />
        <SayiVeToplaRow formData={formData} setFormData={setFormData} />

        <form onSubmit={handleSiparisVer}>
          <button
            type="submit"
            className="siparis-ver-button"
            disabled={!formData.boyut || !formData.hamur}
          >
            Sipariş Ver
          </button>
        </form>
      </main>
    </div>
  );
}