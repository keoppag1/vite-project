import React from 'react'; // ← ¡IMPORTANTE!
import './App.css';
import LinksList from './LinksList';

function App({ onlyContent }) {
  return (
    <>
      <h1>Fron X videos Caseros</h1>
      <LinksList />
    </>
  );
}

export default App;
