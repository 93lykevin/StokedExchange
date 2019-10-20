import React from 'react'
import Ticker from '../ticker/ticker'

export default class Footer extends React.Component {
  render() {
    return(
      <div className="footer-container">
        <div className="copyright"><i className="far fa-copyright"></i>&nbsp;StreetX by Kevin Ly</div>
        <div className="personal-links">
          <a href="https://www.linkedin.com/in/93lykevin/"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/93lykevin/"><i className="fab fa-github"></i></a>
          <a href="https://github.com/93lykevin/"><i className="fas fa-user"></i></a>
        </div>
        {/* <Ticker/> */}
      </div>
    )
  }
}