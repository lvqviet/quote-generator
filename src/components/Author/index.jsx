import React from 'react';
import './author.scss';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Author({ author, genre, theme, onClick }) {
  return (
    <div>
      {theme ? (
        <div 
    className="author" 
    onClick={onClick}
    >
      <div>
        <h3 >
          {author}
        </h3>
        <p>{genre}</p>
      </div>
      
        <ArrowRightAltIcon 
        fontSize="large" 
        style={{color: 'white'}}
      />
      </div>
    ) : (
      <div 
      className="author__dark" 
      onClick={onClick}
      >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div>
        <h3>
          {author}
        </h3>
        <p>{genre}</p>
      </div>
      
        <ArrowRightAltIcon
        fontSize="large"
        style={{ color: theme ? 'white' : '#ff5555'}}
      />
      </div>
    )}
    </div>
  );
}

export default Author;
