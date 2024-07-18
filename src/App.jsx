import { useState } from 'react';
import './App.css'
import quotes from './data/phrases.json';
import getRandomNumbers from './utils/getRandomNumbers';
import Phrase from './components/Phrase';

function App() {
  const indexRandom = getRandomNumbers(quotes.length);
  const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom]);

  console.log(phraseSelected);

  return (
    <div>
      <h1>Galleta de la Fortuna</h1>
      <Phrase 
        phraseSelected={phraseSelected}
      />
    </div>
  )
}

export default App
