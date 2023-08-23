import { useNavigate } from 'react-router';
import styles from './MovieCard.module.css' ;
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';


const MovieCard = (props)=>{
    const {image , title , id} = props ;
    const navTo = useNavigate()


   function cardClickHandler(){
      navTo(`/info/:${id.replace('https://en.yts-official.com/','')}`)
   }
    return (
        <div className={styles.container} onClick={cardClickHandler}>
            <img src={image} alt={title}/>
            <div className={styles.overlay}>
                <div className={styles.icon}>
                <PlayCircleOutlineIcon fontSize='large'></PlayCircleOutlineIcon>
                </div>
              <div className={styles.moviename}>
                <p>{title}</p>
              </div>
            </div>
        </div>
    )
}

export default MovieCard ;