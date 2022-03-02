export default function Movie(props) {
    const {Title, Year, imdbID, Type, Poster} = props;
    return(
      <div key={imdbID} className="cardmovie">
        <img className="activator" src={Poster} />
        <span className="card-title">{Title}</span>
        <p>{Year}</p>
        <span className="right">#{Type}</span>
      </div>
    )
  }