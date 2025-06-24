import React from 'react'; // ← ¡IMPORTANTE!
import './App.css';
import LinksList from './LinksList';

function App({ onlyContent }) {
  return (
    <>
      <div className="ad-space ad-space-top">
        <img src="/public/image.png" alt="Anuncio superior" style={{ width: '100%', maxHeight: '100px', objectFit: 'cover' }} />
      </div>
      <h1>Fron X videos Caseros</h1>
      <LinksList />
      <div className="ad-space ad-space-bottom">
        <img src="/public/pict.jpg" alt="Anuncio inferior" style={{ width: '100%', maxHeight: '100px', objectFit: 'cover' }} />
      </div>
    </>
  );
}

export default App;
