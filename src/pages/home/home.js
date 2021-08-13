import './header.css';
import 'bootstrap/dist/css/bootstrap.css';
import companyLogo from '../../assets/images/michael.JPG';
import React from 'react';


export default function Home() {
    return (
        <div>
            <div class="mainDiv">
                <div class="card img-fluid border-0 ">
                    <img class="card-img-top imgFull noRadius" src={companyLogo} />
                    <div class="card-img-overlay">
                        <h1 class="card-title namestyle col txtColor" >Welcome</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
