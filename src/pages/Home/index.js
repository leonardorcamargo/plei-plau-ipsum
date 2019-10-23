import React, {useState} from 'react';
import {pIpsum} from '../../lib/plei';

export default function Home() {
  const [paragraph, setParagraph] = useState('');

  function handleClick() {
    setParagraph(pIpsum());
  };

  return (
    <>
      <textarea value={paragraph} onChange={(event) => setParagraph(event.target.value)} />
      <button className="btn" onClick={handleClick}>
        Plei
      </button>
    </>
  );
}
