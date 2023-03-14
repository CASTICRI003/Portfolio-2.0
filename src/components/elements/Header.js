import React from 'react';

export default function Header() {
    return (
        <a className='navbar-brand mb-lg-auto mt-lg-4' href="true">
            <span className=''>
                <img className="img-fluid" alt="avatar" src="images/bitmoji.png"></img>
            </span>
            <h1 className='text-center'>Cristian Castillo</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </a>
    )
}