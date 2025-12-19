import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AnaSayfa from './pages/AnaSayfa';
import SiparisFormu from './pages/SiparisFormu';
import SiparisOnayi from './pages/SiparisOnayi';

import './App.css';

function App() {
  const [formData, setFormData] = useState({
    isim: '',
    aktive: false,
    boyut: '',
    hamur: '',
    ekstralar: [],
    siparisNotu: '',
    notKaydedildi: false,
    siparisSayi: 1,
    siparisMesaji: '',
    ekstralarFiyati: 0,
    pizzaFiyati: 85.5,
  });

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AnaSayfa} />
        <Route path="/form">
          <SiparisFormu formData={formData} setFormData={setFormData} />
        </Route>

        <Route path="/siparis-onayi">
          <SiparisOnayi formData={formData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;