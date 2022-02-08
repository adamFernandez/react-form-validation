import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../../styles/Container.styled";

const Movie = ({ movie, logo }) => {
  return (
    <Container movie>
            <div className="movie">
              <div className="trade">
                <img src={logo} width="25px" alt="" />
                <div className="top10">TOP <span className="number">10</span></div>   
              </div>
              <div className="front">
                <img src={movie.img.src} alt={movie.img.src} />
                <div className="info"> 
                  <h3>{movie.title}</h3>
                </div>
              </div>
              <div className="back">
                <div className="options">
                  <p className="play"><FontAwesomeIcon icon="play" size="xs" /></p>
                  <p className="add"><FontAwesomeIcon icon="plus" size="xs" /></p>
                  <p className="up"><FontAwesomeIcon icon="thumbs-up" size="xs" /></p>
                  <p className="down"><FontAwesomeIcon icon="thumbs-down" size="xs" /></p>
                  <p className="sub_menu"><FontAwesomeIcon icon="angle-down" size="sm" /></p>
                </div>
                <div className="info">
                  <p className="age">{movie.info.age}</p>
                  <p className="length">{movie.info.length}</p>
                </div>
                <p className="tags">
                  {movie.tags.map(tag => <span className="tag">{tag}</span> )}
                </p>
              </div>              
            </div>                            
          </Container>  
  );
};

export default Movie;
