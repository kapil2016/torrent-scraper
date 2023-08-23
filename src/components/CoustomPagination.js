import React from 'react';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../states/reducers/movie-reducer';

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    '& .MuiPagination-ul': {
      color: 'white', // Text color
    },
    '& .MuiPaginationItem-root': {
      color: 'white', // Text color for each pagination item
    },
    '& .Mui-selected': {
      fontWeight: 'bold', // Style for the selected page number
    },
  },
}));

function CustomPagination() {
  const dispatch = useDispatch()
  const {currentPage , maxPageCount} = useSelector(state=>state.movie)
  const classes = useStyles();

  function pageChangeHandler(event , page){
    dispatch(setCurrentPage(page))
  } 

  return (
    <div className={classes.pagination}>
      <Pagination page={currentPage} count={maxPageCount} color="primary" onChange={pageChangeHandler} />
    </div>
  );
}

export default CustomPagination;
