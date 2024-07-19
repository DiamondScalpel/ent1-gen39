import { useState } from "react";
import quotes from "./data/phrases.json";
import getRandomNumbers from "./utils/getRandomNumbers";
import Phrase from "./components/Phrase";
import BtnPhrase from "./components/BtnPhrase";
import photos from "./data/photos.json";

function App() {
  const indexRandom = getRandomNumbers(quotes.length);
  const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom]);
  const [bgSelected, setBgSelected] = useState(
    photos[getRandomNumbers(photos.length)]
  );

  console.log(bgSelected);

  const objStyles = {
    backgroundImage: `url(/img/fondo${bgSelected}.png)`,
  };

  return (
    <div style={objStyles}>
      <h1 className="text-3x1 text-red-600">Galleta de la Fortuna</h1>
      <Phrase phraseSelected={phraseSelected} />
      <BtnPhrase
        setPhraseSelected={setPhraseSelected}
        setBgSelected={setBgSelected}
      />
    </div>
  );
}

export default App;
