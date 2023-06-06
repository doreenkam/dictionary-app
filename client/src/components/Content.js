import React from 'react';

export default function Content({ partOfSpeech, definitions, synonyms }) {
  return (
    <div className="word-content">
      <div>
        <p>{partOfSpeech}</p>
        <hr />
      </div>
      <p>Meaning</p>
      <ul>
        {definitions.map((item, index) => (
          <li key={index}>{item.definition}</li>
        ))}
      </ul>

      {synonyms.length > 0 && (
        <p>
          Synonyms:
          {synonyms.map((item, index) => (
            <span key={index} className="word-synonyms">
              {item}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
