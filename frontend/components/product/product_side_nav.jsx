import React from 'react'
import { Link } from 'react-router-dom';

export default class ProductSideNav extends React.Component {
  render() {
    return(
      <div className="side-nav-container">
        <div className="side-nav">
          <ul>
            <li onClick={seedDb}>SEED</li>
            <li><Link to="/index" >ALL</Link></li>
            <li><Link to="/supreme" >SUPREME</Link></li>
            <li><Link to="/bape">BAPE</Link></li>
            <li><Link to="/kith">KITH</Link></li>
            <li><Link to="/palace">PALACE</Link></li>
            <li><Link to="/gucci">GUCCI</Link></li>
            <li><Link to="/jordan">JORDAN</Link></li>
            <li><Link to="/nike">NIKE</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}