import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';

function App() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  function handleSubmit(filterData) {
    
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
