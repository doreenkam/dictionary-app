import React, { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { getWordOfDayQuery } from '../queries';

export default function WordOfDay({ darkMode }) {
  const { data } = useQuery(getWordOfDayQuery);
  const [wordOfDay, setWordOfDay] = useState('Query');
  const [meaning, setMeaning] = useState(null);

  const date = new Date().toString().split(' ').slice(1, 4).join(' ');

  useEffect(() => {
    const getWordOfDay = async () => {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${wordOfDay}`
      );
      const data = await res.json();
      setMeaning(data[0].meanings[0].definitions[0].definition);
    };
    getWordOfDay();
  }, [data]);

  return (
    <form>
      {data &&
        data.words.map((word) => {
          if (word.date === date) {
            return (
              <div className={`word-of-day ${darkMode && ' wod-dark'}`}>
                <h6>{word.date}</h6>
                <h4>Word of the Day:</h4>
                <h3 style={{ fontSize: '35px', fontWeight: '700' }}>
                  {word.text}
                </h3>
                <div style={{ width: '70%' }}>
                  <p style={{ textAlign: 'center', fontSize: '13px' }}>
                    {meaning}
                  </p>
                </div>
              </div>
            );
          }
        })}
    </form>
  );
}
