import Movie from "./Movie";

export default function Movies(props) {
    const {movies = []} = props;

    return(
        <div className="movies">
            {movies.length ? movies.map(movie => (
                <Movie key={movie.imdbID} {...movie} />
            )) : <div className="not">
                <h1>404</h1>
                <h3>not found</h3>
                </div>
                 }
        </div>
    
    )

}