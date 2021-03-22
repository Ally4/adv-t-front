import React, { Component } from 'react';
import Logout from './Logout';
import '../assets/styles/Navigation.scss';

export default class navigation extends Component {
  render() {
    return (
<div className="navigation">
  <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
    <label for="navi-toggle" className="navigation__button">
      <span className="navigation__icon">&nbsp;</span>
    </label>
      <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            {/* <li className="navigation__item"><a href="" className="navigation__link"><span>01</span> <Logout /></a></li> */}
            {/* <li className="navigation__item"><a href="" className="navigation__link"><span>02</span> Your benefits</a></li> */}
            {/* <li className="navigation__item"><a href="" className="navigation__link"><span>03</span> Popular tours</a></li> */}
            {/* <li className="navigation__item"><a href="" className="navigation__link"><span>04</span> Stories</a></li> */}
            {/* <li className="navigation__item"><a href="" className="navigation__link"><span>05</span> Book now</a></li> */}
          </ul>
        </nav>
</div>
    )
  }
}