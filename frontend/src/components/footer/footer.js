import React from 'react';

<<<<<<< HEAD
=======
import './footer.css'
>>>>>>> Main

export default function Footer(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light col-12">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse col-12" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto separator">
            <li className="nav-item active">
<<<<<<< HEAD
                <a className="nav-link ml-5" href="#">Home <span class="ml-5">|⋮|</span><span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link ml-5 " href="#">About Us<span class="ml-5 disabled">|⋮|</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link ml-5" href="#">Categories<span class="ml-5">|⋮|</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link ml-5" href="#">Authors<span class="ml-5">|⋮|</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link ml-5" href="#">Terms & Conditions</a>
=======
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link " href="#">About Us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Categories</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Authors</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Terms & Conditions</a>
>>>>>>> Main
            </li>
            </ul>
        </div>
        </nav>
    )
}

