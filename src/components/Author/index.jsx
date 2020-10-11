import React from 'react';
import './author.scss';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Author({ author, genre, theme, onClick }) {
  return (
    <div 
    className="author" 
    onClick={onClick}
    style={{
      color: theme ? '' : '#ff5555',
    }}
    >
      <div>
        <h3 style={{color: theme ? '' : '#ff5555'}}>
          {author}
        </h3>
        <p>{genre}</p>
      </div>
      
        <ArrowRightAltIcon
        fontSize="large"
        style={{ color: theme ? 'white' : '#ff5555'}}
      />
      
      
    </div>
  );
}

export default Author;
