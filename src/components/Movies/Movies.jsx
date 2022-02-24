import Movie from "./Movie/Movie";

const Movies = ({ data, logo }) => {
  return (
    <>
      {data.map(movie => 
        <Movie key={movie.id} movie={movie} logo={logo} />  
      )}
    </>  
  );
};

export default Movies;
