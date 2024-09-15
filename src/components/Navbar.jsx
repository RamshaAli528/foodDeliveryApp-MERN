import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons'; 

export default function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div className="container"> 
    <Link className="navbar-brand fs-2 Caveat" to="/">Foody
    <FontAwesomeIcon icon={faUtensils} />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
       
     
       
      </ul>
      {/* <form className="d-flex"> */}
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <Link to="/login" className="btn btn-outline-dark d-md-none d-block text-white" type="submit">Login</Link>
      {/* </form> */}
    </div>
    <Link to="/login" className="btn btn-outline-dark d-md-block d-none text-white" type="submit">Login</Link>

  </div>
</nav>
    </div>
  )
}
