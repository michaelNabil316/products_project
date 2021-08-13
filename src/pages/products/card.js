import React from 'react';
import { Link } from 'react-router-dom';
import './products.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from 'react-redux';
import { ChangeFavAction } from '../../redux/actions/favorites'

export default function Card(props) {
    //update
    const dispatch = useDispatch();
    const handelChangeNumber = (item) => {
        dispatch(ChangeFavAction(item))
    }

    return (
        <div className="card shadow-lg mb-4 "  >
            <div className="card-body ">
                <img className="card-img-top imgSty" src={props.el.image} alt="Card image" />
                <h4 className="card-title">{props.el.title}</h4>
                <Link to={"/ProdDetails/" + props.el.id} >
                    <a href="#" className="btn btn-primary">See Profile</a>
                </Link>
            </div>
            {props.addFav ?
                <div className='btn btn-primary' onClick={() => { handelChangeNumber(props.el) }} >add to favorites</div>
                : ''}
        </div>
    )
}