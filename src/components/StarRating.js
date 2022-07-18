import React, { useState } from 'react';
import '../Customer.css';
import Axios from 'axios';

function StarRating({ count, value,
  inactiveColor = '#ddd',
  size = 24,
  activeColor = '#f00', onChange }) {

  // short trick 
  const stars = Array.from({ length: count }, () => '★')

  // Internal handle change function
  const handleChange = (value) => {
    onChange(value + 1);
  }

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style = activeColor;
        }
        return (
          <span className={"star"}
            key={index}
            style={{ color: style, width: size, height: size, fontSize: size }}
            onClick={() => handleChange(index)}>{s}</span>
        )
      })}
      {value}
    </div>
  )
}


function StarRatingDemo() {
  // Get the rating from a db if required.
  // The value 3 is just for testing.
  const [ratingCustomer, setRatingCustomer] = useState("");
  const [rating, setRating] = useState("");

  const [customers, setCustomers] = useState([]);

  const customer = () => {
    Axios.post("http://localhost:3001/customer", {
      rating: ratingCustomer,
    }).then(response => {
      console.log(response)

    });
  };
  const getCustomer = () => {
    Axios.get("http://localhost:3001/customer")
      .then(response => {
        setCustomers(response.data)
        console.log(response.data)
      });
  };

  const handleChange = (value) => {
    setRating(value);
    console.log(value);
  }
  return (
    <div>

      <StarRating
        count={5}
        size={30}
        value={rating}
        activeColor={'gold'}
        inactiveColor={'#ddd'}
        onChange={handleChange}
       />
      {getCustomer()}
    </div>
  )
}

export default StarRatingDemo;