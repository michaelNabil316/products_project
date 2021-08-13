import React, { useEffect, useState } from 'react';
import './bookCard.css'
import 'bootstrap/dist/css/bootstrap.css';
import Stars from '../startRating/startRating.js'


export default function Card(props) {
    //here we should take the number of stars from api
    var starsNumber = 3;
    //the array of the starts rating
    const starArr = [];
    //adding starts to array by the number of rating
    for (var i = 0; i < starsNumber; i++) {
        starArr.push(
            <div className="col-1" key={i}>
                <Stars />
            </div>
        )
    }
    return (
        <div className="card shadow-lg mb-4 "  >
            <div className="card-body ">
                <h4 className="card-title">{props.el.volumeInfo.title}</h4>
                <div className="row justify-content-center">
                    {starArr}
                </div>
                <p className="card-text flex-stretch">{props.el.volumeInfo.description}</p>
            </div>
        </div>

    )
}