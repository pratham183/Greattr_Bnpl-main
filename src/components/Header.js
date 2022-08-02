import React from 'react';
import './main.css'
const Header = () => {
  return (
    <div className="headerDiv">
 
    <img src="assets/img/greattrAndLogoWhite.png" className="logo"/>
    <div style={{display:'flex',justifyContent:'space-evenly',maxWidth:'100vw',paddingTop:'30px'}}>
    <p style={{ fontSize:'3em',marginLeft:'100px',color:'#FFFFFF',fontWeight:'500'}}>
      For Greattr<span><br/></span>things in life</p>
    <img className="cart" src="assets/img/pin12Converted.png"/>
    </div>
    <div className="para">
    <p>Make your payments today with greattr and pay later at your convenience</p>
    </div>
</div>
  )
}

export default Header