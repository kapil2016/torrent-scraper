import SearchAppBar from "../../AppBar";
import AllMovies from "../../AllMovies";
import CustomPagination from "../../CoustomPagination";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setMovies , setMaxPageCount } from "../../../states/reducers/movie-reducer";

async function fetchData(keyword, page, type) {
    const res = await axios.get(`http://localhost:3000/movies`, {
        params: {
            keyword: keyword,
            page: page,
            type: type
        }
    })
    console.log(page)
    return res.data;
}

const Home = () => {

    const dispatch = useDispatch()
    const { currentPage, type, searchTerm , maxPageCount } = useSelector(state => state.movie)
    useEffect(() => {
        fetchData(searchTerm, currentPage, type).then(data => {
            dispatch(setMovies(data.movies));
            dispatch(setMaxPageCount(data.pageCount))
        }).catch(console.log)
    }, [searchTerm, currentPage, type , dispatch])

    console.log(searchTerm)
    return (
        <>
            <SearchAppBar></SearchAppBar>
            <AllMovies></AllMovies>
            {maxPageCount > 0 &&
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100vw',
                    height: '100%'
                }}>
                    <CustomPagination></CustomPagination>
                </div>
            }
        </>
    )
}

export default Home;
