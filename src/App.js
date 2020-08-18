import React from 'react';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div className="container">
        <Navbar title="Elemanlar"/>
        <hr/>
        <User
          name="Berat Yıldırım"
          department="Bilişim"
          salary="5500TL"
        />
        <User
          name="Eyüp Yıldırım"
          department="Bilişim"
          salary="6000TL"
        />
    </div>
  );
}

export default App;
