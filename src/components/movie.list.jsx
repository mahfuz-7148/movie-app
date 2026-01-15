import {getAllMovies} from '../data/movies.data.js';
import {MovieCard} from './movie.card.jsx';

export const MovieList = () => {
  const movies = getAllMovies()
  return (
      <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-7'>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie}/>
          )
        )}
      </div>
  )
}
