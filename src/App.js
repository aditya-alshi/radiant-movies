import logo from './logo.svg';

import React from 'react';

function App() {

  const [movies, setMovies] = React.useState([])

  React.useEffect(() => {
    const getMovies = async () => {
      const response = await fetch("https://dummyapi.online/api/movies");
      const parsedResponse = await response.json();
      setMovies(parsedResponse);
    }
    getMovies();
  })

  const renderMovies = movies.map(movie => (
    <div className='w-full  bg-slate-200 my-2'  key={movie.id}>
      <img src={movie.image} alt={movie.movie + " - image"} />
      <div>
        <p>{movie.movie}</p>
        <p>{movie.rating}</p>
        <p>{movie.imdb_url}</p>
      </div>
    </div>
  ))

  return (
    <div className="App">
      <header className="bg-[#282c34] text-center h-fit flex items-center justify-center text-4xl py-12">
        <h1 className='text-[#e7e7e9]'>Radiantly Movies</h1>
      </header>
      <main>
        <div className=' grid grid-cols-[repeat(auto-fill, minmax(200px, 500px))]'>
          {renderMovies}
        </div>
      </main>
    </div>
  );
}

export default App;
