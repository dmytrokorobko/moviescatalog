export function Form({title, year, genres, selectedGenre, onButtonSubmit}) {
   return (
      <form>
         <h2>Filters:</h2>
         <input type="text" value={title} id="title" placeholder="Enter movie title" />
         <input type="number" value={year} id="year" placeholder="Enter year" />
         {genres && genres.length > 0 ? (
            <div className="genres">
               <label htmlFor="genres">Genres:</label>
               <select id="genres" value={selectedGenre}>
               <option value=''>All genres</option>
                  {genres.map(genre=>(
                     <option value={genre}>{genre}</option>
                  ))}
               </select>            
            </div>
         ) : ''}
         <input type="submit" value='Find movies' onSubmit={(e)=>{
            e.preventDefault();
            const inputTitle = document.getElementById('title').value;
            const inputYear = document.getElementById('year').value;
            const inputGenre = document.getElementById('genres').value;
            const filterData = {
               title: inputTitle,
               year: inputYear,
               genre: inputGenre
            };
            onButtonSubmit(filterData);
         }} />
      </form>
   )
}