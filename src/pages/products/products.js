import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../redux/actions/product";
import axios from 'axios';
import Card from './card.js';

export default function Products() {
    // const [myList, setMyList] = useState([]);
    // useEffect(() => {
    //     axios.get("https://fakestoreapi.com/products"
    //     ).then((response) => { setMyList(response.data) }
    //     ).catch((err) => { console.log(err) })
    // }, [])

    const myList = useSelector((state) => state.products.productsList);
    console.log(myList);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return (
        <div className="container-fluid pt-4" style={{ backgroundColor: "gray" }}>
            <div className="row"  >
                {myList.map((el, index) =>
                    <div className="col-xl-4 col-lg-6 md-col-6 col-12" key={index}>
                        <Card el={el} addFav={true} />
                    </div>
                )}
            </div>
        </div>
    )
}