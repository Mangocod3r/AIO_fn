// Movie.js
import React, { useEffect, useState } from 'react';
import Navbar_ from './Navbar_';

function Movie() {
  const [cats, setCats] = useState([
    {
      image: '',
      price: '',
      theatre: '',
    },
  ]);

  useEffect(() => {
    fetch(`${process.env.BACKEND}/getmovie`)
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  const [totalAmount, setTotalAmount] = useState(0);

  const handleButtonClick = (cat) => {
    setCats((prevCats) =>
      prevCats.map((prevCat) =>
        prevCat._id === cat._id
          ? { ...prevCat, count: prevCat.count + 1 }
          : prevCat
      )
    );
    setTotalAmount(totalAmount + cat.price);
  };

  return (
    <>
      <Navbar_ />
      <div className="movie-container">
        <div>
          <h1>MOVIE PAGE</h1>
          <p className="movie-totalamount">Total Amount: {totalAmount}</p>
          {cats.map((cat) => (
            <div key={cat._id} className="movie-item">
              <h3 className="movie-price">Price: {cat.price}</h3>
              <h3 className="theatre-price">Theatre: {cat.theatre}</h3>
              <h3 className="individual-count">Tickets: {cat.count}</h3>
              <h3><button onClick={() => handleButtonClick(cat)}>
                Add Ticket
              </button>
              </h3>
              <img src={cat.image} alt="Movie" className="movie-image" />


            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Movie;
