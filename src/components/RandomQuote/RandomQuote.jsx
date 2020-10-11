/* eslint-disable no-unused-expressions */
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Author from '../Author';
import Footer from '../Footer';
import Loading from '../Loading';
import Quote from '../Quote';
import LoopIcon from '@material-ui/icons/Loop';
import './randomQuote.scss';

function RandomQuote() {
  const [quotes, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async (url, array) => {
    try {
      setLoading(true);
      if (array) {
        const res = await Axios.get(url);
        setQuote(res.data.quotes);
        console.log(res.data.quotes);
      } else {
        const res = await Axios.get(url);
        setQuote(res.data.quote);
        console.log(res.data.quote);
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
  useEffect(getQuote, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <div className="btn">
        <div className="btn--random" onClick={getQuote}>
          random <LoopIcon />
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          {quotes.length ? (
            <>
              <h1>{quotes[0].quoteAuthor}</h1>
              {quotes.map(quote => (
                <Quote key={quote._id} quote={quote.quoteText} />
              ))}
            </>
          ) : (
            <div className="content">
              <Quote quote={quotes.quoteText} />
              <Author
                author={quotes.quoteAuthor}
                genre={quotes.quoteGenre}
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
