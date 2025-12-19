import React from 'react';
import './AnaSayfa.css';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';


export default function AnaSayfa() {
    const history = useHistory();

    return (

        <div className="anasayfa">
            <Header/>
            <p>
  KOD ACIKTIRIR<br />
  PİZZA, DOYURUR
</p>
            <button onClick={() => history.push('/form')}>ACIKTIM</button>
        </div>
    )
}