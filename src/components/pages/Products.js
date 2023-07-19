import React from 'react';
import '../../App.css';
import './Products.css'

const Services = () => {
  return (
    <div className='bgm'>
    <div className="movie-container">
      <label> Select a movie:<i className="fas fa-caret-down"></i></label>
      <select id="movie">
        <option value="320">salaar (RS.320)</option>
        <option value="220">jawan (RS.220)</option>
        <option value="250">oppenHeimer (RS.250)</option>
        <option value="260">The Nun 2 (RS.260)</option>
        <option value="260">Guntur karam (RS.260)</option>
      </select>
    </div>

    <ul class="showcase">
      <li>
        <div className="seat"></div>
        <small>Available</small>
      </li>
      <li>
        <div className="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div className="seat sold"></div>
        <small>Sold</small>
      </li>
    </ul>
    <div className="container">
      <div className="screen"></div>

      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>

      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat"></div>
      </div>
    </div>
  
   
  

    <p className="text">
      You have selected <span id="count">0</span> seat for a price of RS.<span
        id="total"
        >0</span
      >
    </p>
    <div>
   
    </div>
    </div>
    )
}

export default Services
