import React from "react";
import getRandomNumbers from "../utils/getRandomNumbers";
import quotes from "../data/phrases.json";
import photos from "../data/photos.json";

const BtnPhrase = ({ setPhraseSelected, setBgSelected }) => {
  const changePhrase = () => {
    const indexRandom = getRandomNumbers(quotes.length);
    const phraseRandom = quotes[indexRandom];
    setPhraseSelected(phraseRandom);
    setBgSelected(photos[getRandomNumbers(photos.length)]);
  };

  return <button className="hover:scale-125 transition-transform cursor-pointer ml-auto block bg-indigo-700 py-2 px-4 rounded-lg text-white" onClick={changePhrase}>Abrir otra</button>;
};

export default BtnPhrase;
