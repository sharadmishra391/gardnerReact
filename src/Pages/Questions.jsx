import React, { useState } from "react";
import axios from "axios";

const Questions = () => {
    const [selectedOption, setSelectedOption] = useState(''); 
    const handleChange = (e) => {
         let name = e.target.name;
         let value = e.target.value;
         setSelectedOption((values) => ({ ...values, [name]: value }));
         console.log(selectedOption);
         }; 
    const handleSubmit = (event) => { 
        event.preventDefault(); 
        console.log( selectedOption);
        
         };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {" "}
          <label>
            <h1>What kind of property is this for?</h1>
            <br />{" "}
            <input
              type="radio"
              name="q1"
              value="Communal Garden"
              onChange={handleChange}
            />{" "}
            Communal Garden
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="q1"
              value="Office or Commercial Garden"
              onChange={handleChange}
            />{" "}
            Office or Commercial Garden
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="q1"
              value="Public "
              onChange={handleChange}
            />{" "}
            Public
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="q1"
              value="Residential"
              onChange={handleChange}
            />
            Residential
          </label>
        </div>
        <div>
          <label>
            <h1>How often do you need gardening services?</h1>
            <input
              type="radio"
              name="q2"
              value="Daily"
              onChange={handleChange}
            />
            Daily
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="q2" value="Weekly" onChange={handleChange} />
            Weekly
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="q2" value="Every other week" onChange={handleChange} />
            Every other week
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="q2" value="Monthly" onChange={handleChange} />
            Monthly
          </label>
        </div>
        <div>
            <label> <h1>Do you need plants purchasing?</h1>
            

            </label>
        </div>
        <button type="submit">Submit</button>{" "}
      </form>
    </>
  );
};

export default Questions;
