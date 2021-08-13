import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Card from '../products/card';
import { useSelector } from 'react-redux';


export default function Favorites() {

    const fav = useSelector((state) => state.favorites.currentFav);

    return (
        <div className="container-fluid pt-4" style={{ backgroundColor: "gray" }}>
            <h2>my favorite cards </h2>
            <div className="row"  >
                {fav.map((el, index) =>
                    <div className="col-xl-4 col-lg-6 md-col-6 col-12" key={index}>
                        <Card el={el} />
                    </div>
                )}
            </div>
        </div>
    )
}
