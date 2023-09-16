import React from 'react'
import appIcon from '/images/stock-icon.png';

const Home = (props) => {
  return (
    <div>
        <h1><b style={{color:"darkgreen", fontSize:"45px"}}>$tock $avvy</b></h1>
        <img src={appIcon} alt="$tock $avvy Icon" />
        {/* <img src="/images/stock-icon.png" alt="$tock $avvy Icon" /> */}
        <h3>Take control of your financial future with the information you need, right at your fingertips.</h3>
    </div>
  )
}

export default Home