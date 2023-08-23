import { useState, useEffect } from 'react';
import AllMovies from './components/AllMovies';
import SearchAppBar from './components/AppBar';
import CustomPagination from './CoustomPagination';
import axios from 'axios';
async function fetchData(keyword , page , type) {
  const res = await axios.get(`http://localhost:3000/movies`, {
    params: {
      keyword: keyword,
      page:page , 
      type:type
    }

  })
  console.log(page)
  return res.data;
}

function App() {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState([]);
  const[type , setType] = useState("movies")
  const[page , setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  useEffect(() => {
    fetchData(keyword , page , type).then(data => {
      setMovies(data.movies)
      setPageCount(data.pageCount)
     
    }).catch(console.log)
  }, [keyword , page , type])

  console.log(keyword)


  return (
    <>
      <SearchAppBar setKeyword={setKeyword} setPage={setPage} setType={setType}></SearchAppBar>
      <AllMovies movies={movies}></AllMovies>
      {pageCount > 0 &&
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100%' }}><CustomPagination pageCount={pageCount} setPage={setPage} defaultPage={page}></CustomPagination></div>}

    </>
  );
}

export default App;
