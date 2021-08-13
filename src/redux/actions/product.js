import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRODUCTS } from '../types';

export const getProducts = () => {
    return (dispatch) => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: response.data,
                });
            })
            .catch((err) => console.log(err));
    };
};