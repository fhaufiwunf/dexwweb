import React from 'react'
import Logo from "../moralis-logo.svg";
import Eth from "../eth.svg";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <div className='leftH'>
        <img src={Logo} alt='logo'  className='logo'/>
        <Link to="/" className="link">
          <div className='headerItem'>swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className='headerItem'>tokens</div>
        </Link>
      
      </div>
      <div>sreach navbar</div>
      <div className='rightH'>
        <div className='headerItem'>
          <img src={Eth} alt='eth' className='eth'/>
          ethereum
        </div>
        <div className='connectButton'>
          connect
        </div>
      </div>
    </header>
  )
}

export default Header