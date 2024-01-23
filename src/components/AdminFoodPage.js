// AdminFoodPage.js
import React, { useEffect, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import axios from "axios"
import AdNav from './AdNav';

function AdminFoodPage() {
  const [cats, setCats] = useState([
    {
      image: '',
      price: '',
      hotel: '',
    },
  ]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/getfood`)
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  const deletePost = (id) => {
    console.log("delete------food-------qwerty");
    console.log(id);

    axios
      .delete(`${process.env.REACT_APP_BACKEND}/deletefood/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  };

  return (
    <>
    <AdNav/>
    <div className="food-container">
      
      <div>
        <h1>FOOD PAGE</h1>
        {cats.map((cat) => (
          <div key={cat._id} className="food-item">
            <h3 className="food-price">Price: {cat.price}</h3>
            <h3 className="HOtel-price">hotel: {cat.hotel}</h3>
            <img src={cat.image} alt="Food" className="food-image" />
            <Button
                    onClick={() => deletePost(cat._id)}
                    variant="outline-danger"
                    style={{ width: "100%" }}
                  >
                    DELETE
            </Button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default AdminFoodPage;
