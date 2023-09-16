import React from 'react'

const About = (props) => {
  return (
    <div style={{textAlign:"left", fontSize:"18px"} } >
        <p><b style={{color:"darkgreen", fontSize:"20px"}}>$tock $avvy</b>, is your go-to resource for up-to-date and comprehensive data on a wide range of stocks.</p>
        <p>Our app is designed to help you stay informed about your investments and make well-informed financial decisions. Whether you're a seasoned investor looking to stay updated on your portfolio or someone just starting their investment journey, $tock $avvy has you covered!</p>

        <p style={{textAlign:"left"}}><b><u>App Key Features:</u></b></p>
        <ul style={{textAlign:"left", listStyleType: "circle"}}><b>Stock Details:</b> Get detailed information about various stocks, including the company name, symbol, last price, and real-time data.</ul>
        <ul style={{textAlign:"left", listStyleType: "circle"}}><b>Price Changes:</b> Monitor stock price changes with precision, including current changes, highs, lows, and opening prices.</ul>
    </div>
  )
}

export default About