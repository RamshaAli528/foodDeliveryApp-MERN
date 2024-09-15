import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (

    <footer className="my-4 border-top">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
        <div className="col-md-4 d-flex align-items-center">

          <Link className="navbar-brand fs-4 Caveat text-white" to="/">Foody
            <FontAwesomeIcon icon={faUtensils} />
          </Link>
        </div>
        <div className="text-muted">© 2024 Ramsha Ali</div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a href="https://www.linkedin.com/in/ramsha-ali-663641244/" target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a></li>
          <li className="ms-3"><a href="https://github.com/RamshaAli528" target='_blank'>
            <FontAwesomeIcon icon={faGithub} />
          </a></li>

        </ul>
        </div>
      </div>

    </footer>

  )
}

export default Footer
