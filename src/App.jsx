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
    <div
      style={objStyles}
      className="min-h-screen bg-cover bg-center flex justify-center items-center px-4"
    >
      <h1 className="absolute top-20 text-3xl uppercase font-black text-center drop-shadow-lg text-stroke-2 text-white">
        Galleta de la Fortuna
      </h1>
      <article className="max-w-[400px] bg-white p-6 rounded-xl shadow-2xl">
        <Phrase phraseSelected={phraseSelected} />
      </article>
      <footer className="absolute bottom-20">
        <BtnPhrase
          setPhraseSelected={setPhraseSelected}
          setBgSelected={setBgSelected}
        />
      </footer>
    </div>
  );
}

export default App;
