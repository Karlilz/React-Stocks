import React from 'react'
import {useParams} from "react-router-dom"
import data from "../components/data.json"

const Stock = (props) => {
  const params =useParams()
  const symbol = params.symbol
  const stock= data.find((item) => item.symbol === symbol)
  return (
    <div>
      <h1 style={{textAlign:"left", fontSize:"20px"}}><b>Name:</b> {stock.name}({stock.symbol})</h1>
      <h1 style={{textAlign:"left", fontSize:"20px"}}><b>Price:</b> {stock.lastPrice}</h1>
      <h1 style={{textAlign:"left", fontSize:"20px", color: stock.change > 0 ? 'green' : 'red'}}><b>Change:</b> {stock.change}</h1>
      <h1 style={{textAlign:"left", fontSize:"20px"}}><b>High:</b>{stock.high}</h1>
      <h1 style={{textAlign:"left", fontSize:"20px"}}><b>Low:</b>{stock.low}</h1>
      <h1 style={{textAlign:"left", fontSize:"20px"}}><b>Open:</b>{stock.open}</h1>
    </div>
  )
}

export default Stock










