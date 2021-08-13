import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css'
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { counterContext } from '../../context/counterContext';

export default function Navbar() {
    const { noContext, setNoContext } = useContext(counterContext);

    const fav = useSelector((state) => state.favorites.currentFav);
    const myList = useSelector((state) => state.products.productsList);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item navstyle">
                        <NavLink to="/" exact className="itemsStyle"><h4 >Michael</h4></NavLink>
                    </li>
                    <li className="nav-item navstyle">
                        <NavLink to="/login" exact className="itemsStyle" ><h4 >login</h4></NavLink>
                    </li>
                    <li className="nav-item navstyle">
                        <NavLink to="/toDo" exact className="itemsStyle"><h4>todo</h4></NavLink>
                    </li>
                    <li className="nav-item navstyle">
                        <NavLink to="/products" exact className="itemsStyle"><h4>products ({myList.length})</h4></NavLink>
                    </li>
                    <li className="nav-item navstyle">
                        <NavLink to="/books" exact className="itemsStyle"><h4>books</h4></NavLink>
                    </li>
                    <li className="nav-item navstyle">
                        <NavLink to="/counter" exact className="itemsStyle"><h4>no.context ({noContext})</h4></NavLink>
                    </li>
                    <li className="nav-item navstyle">
                        <NavLink to="/favorites" exact className="itemsStyle"><h4>favorite ({fav.length})</h4></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
