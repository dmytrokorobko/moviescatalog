import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './components/Form';

function App() {
  const [genres, setGenres] = useState([]);
  //const [movies, setMovies] = useState([]);

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');  
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(()=>{
    //load available genres
    setGenres([]);
  }, [])

  function handleSubmit(filterData) {
    setTitle(filterData.title);
    setYear(filterData.year);
    setSelectedGenre(filterData.genre);

    
  }

  return (
    <div className="App">
      <header>
        <h1>Crazy Film Finder</h1>
        <Form title={title} year={year} genres={genres} selectedGenre={selectedGenre} onButtonSubmit={handleSubmit} />
      </header>
    </div>
  );
}

export default App;
