import { useSelector } from "react-redux";
import styles from "./Allmovies.module.css"
import MovieCard from "./MovieCard";

import { Typography } from "@material-ui/core";

const AllMovies = () => {
    const {movies} = useSelector(state=>state.movie)

    return (
        <>
            <div className={styles.moviesContainer}>
                {movies.map((item , index) => (
                    <MovieCard
                        key={index}
                        id={item.url}
                        image={item.image}
                        title={item.name}
                    ></MovieCard>
                ))}
                {movies.length === 0 && <Typography style={{color:'white'}}>No Movie Found</Typography>}
            </div>
        </>
    );
};

export default AllMovies;