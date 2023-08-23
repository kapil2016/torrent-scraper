import { useParams } from "react-router";

const InfoPage = ()=>{
 const params = useParams() ;
 const movieid = params.movieid ;

    return (
        <>
            <div>
                {movieid}
            </div>
        </>
    )
}

export default InfoPage ;