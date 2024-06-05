export function Form({title, year, genres, selectedGenre}) {
   return (
      <form>
         <h2>Filters:</h2>
         <input type="text" value={title} placeholder="You can enter a title or a part of a title" />
         <input type="number" value={year} placeholder="You can enter a year" />
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
            
         }} />
      </form>
   )
}