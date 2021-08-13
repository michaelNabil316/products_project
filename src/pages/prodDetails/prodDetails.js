import 'bootstrap/dist/css/bootstrap.css';
import './proDetails.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

export default function ProdDetails() {
    const [myprod, setmyprod] = useState([]);
    const param = useParams();
    const path = "https://fakestoreapi.com/products/" + param.id;


    useEffect(() => {
        axios.get(path
        ).then((response) => { setmyprod(response.data); }
        ).catch((err) => { console.log(err) })
    }, [])

    return (
        <div >
            <h1 className="titlestyle">{myprod.title}</h1>
            <h3 className="pricestyle">price: ${myprod.price}</h3>
            <img className="card-img-top cardSty" src={myprod.image} alt="Card image" />
            <div className="card-body">
                <h4 className="card-title">{myprod.description}</h4>
                <h6 className="card-text">category: {myprod.category}</h6>
            </div>
        </div>
    )
}
//{param.id}