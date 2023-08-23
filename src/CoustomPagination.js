import React from 'react';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@material-ui/core/styles';

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

function CustomPagination({pageCount , setPage ,defaultPage}) {
  const classes = useStyles();

  function pageChangeHandler(event , page){
    setPage(page)
  } 

  return (
    <div className={classes.pagination}>
      <Pagination page={defaultPage} count={pageCount} color="primary" onChange={pageChangeHandler} />
    </div>
  );
}

export default CustomPagination;
