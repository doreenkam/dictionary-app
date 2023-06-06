import { useState, useEffect, useContext } from 'react';
import Navbar from './components/Navbar';
import Word from './components/Word';
import Content from './components/Content';
import WordOfDay from './components/WordOfDay';
import SearchIcon from '@mui/icons-material/Search';
import { DarkModeContext } from './context/DarkModeContext';

function App() {
  const [word, setWord] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const getDefinition = async () => {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/parent`
      );
      const data = await res.json();
      setSearchResults(data[0]);
    };
    getDefinition();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await res.json();
    setSearchResults(data[0]);
  }

  const wordData = {
    audio: searchResults?.phonetics.find((item) => item.audio !== '').audio,
    word: searchResults?.word,
    phonetic: searchResults?.phonetic,
  };

  return (
    <div className={`App ${darkMode ? ' app-dark' : ' app-light'}`}>
      <Navbar />

      <WordOfDay darkMode={darkMode} />
      <form onSubmit={handleSubmit}>
        <input
          className={`search-input  ${darkMode && 'search-dark'}`}
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Search Any Word 😊"
        />
        <button
          className={`search-btn  ${darkMode && 'search-dark'}`}
          onClick={handleSubmit}
        >
          <SearchIcon />
        </button>
      </form>
      {searchResults?.meanings && (
        <>
          <Word {...wordData} />
          {searchResults.meanings.map((item, index) => {
            return <Content {...item} key={index} />;
          })}
        </>
      )}
    </div>
  );
}

export default App;
