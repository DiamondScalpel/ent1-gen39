import React from "react";

const Phrase = ({ phraseSelected }) => {
  console.log(phraseSelected);
  return (
    <div>
      <p className="text-center font-semibold mb-6">{phraseSelected.phrase}</p>
      <p className=" text-right w-min bg-stone-600 rounded-lg py-3 px-2 text-white">{phraseSelected.author}</p>
    </div>
  );
};

export default Phrase;
