/* eslint-disable no-unused-expressions */
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Author from '../Author';
import Footer from '../Footer';
import Loading from '../Loading';
import Quote from '../Quote';
import LoopIcon from '@material-ui/icons/Loop';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import './randomQuote.scss';

function RandomQuote() {
  const [quotes, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] =useState(true);  // false => dark mode

  const getData = async (url, array) => {  // quote:{} | quotes:[]
    try {
      setLoading(true);
      if (array) {
        const res = await Axios.get(url);
        setQuote(res.data.quotes);
      } else {
        const res = await Axios.get(url);
        setQuote(res.data.quote);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getQuote = () => {
    getData(
      'https://quote-garden.herokuapp.com/api/v2/quotes/random',
      false
    );
  };

  const getQuotesByAuthor = () => {
    getData(
      `https://quote-garden.herokuapp.com/api/v2/authors/${quotes.quoteAuthor}`,
      true
    );
    return;
  };

  const handleTheme = () => {
    setTheme(!theme);
  }

  useEffect(getQuote, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme ? '': '#282a36' ,
        transition: '150ms'
      }}
    >
      <div className="btn" style={{color: theme ? '' : 'white'}}>
        <div className="btn--theme" onClick={handleTheme}>
          { theme ? (  // check theme
            <Brightness2Icon fontSize='large'/>
          ) : (
                <WbSunnyIcon fontSize='large' />
          )}
        </div>
        <div className="btn--random" onClick={getQuote}>
          random <LoopIcon />
        </div>
      </div>
      {loading ? ( // check waiting for call api
        <div style={{color: theme ? '' : '#ff5555'}}> 
          <Loading />
        </div>
        
      ) : (
        <div className="container">
          {quotes.length ? (
            <div style={{color: theme ? '' : 'white'}}>
              <h1 style={{color: theme ? '' : '#ff5555'}}>{quotes[0].quoteAuthor}</h1>
              {quotes.map(quote => (
                <Quote 
                key={quote._id} 
                quote={quote.quoteText} 
                />
              ))}
            </div>
          ) : (
            <div 
            className="content"
            style={{color: theme ? '' : 'white '}}
            >
              <Quote quote={quotes.quoteText} />
              <Author
                author={quotes.quoteAuthor}
                genre={quotes.quoteGenre}
                theme={theme}
                onClick={getQuotesByAuthor}
              />
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default RandomQuote;
