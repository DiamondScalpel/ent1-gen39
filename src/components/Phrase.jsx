import React from 'react';

const Phrase = ({ phraseSelected }) => {
    console.log(phraseSelected);
  return (
    <div>
        <p>{phraseSelected.phrase}</p>
        <p>{phraseSelected.author}</p>
    </div>
  )
}

export default Phrase;