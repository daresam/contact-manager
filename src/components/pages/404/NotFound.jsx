import React from 'react'
import {Link} from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1 className="display-4">404 Page Not Found</h1>
      <p className="lead">Sorry, the page does not exist <Link to="/"> Go Back</Link></p>

    </div>
  )
}
