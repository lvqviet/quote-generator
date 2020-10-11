import React from 'react';
import './author.scss';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Author({ author, genre, onClick }) {
  return (
    <div className="author" onClick={onClick}>
      <div>
        <h3>{author}</h3>
        <p>{genre}</p>
      </div>
      <ArrowRightAltIcon
        fontSize="large"
        style={{ color: 'white' }}
      />
    </div>
  );
}

export default Author;
