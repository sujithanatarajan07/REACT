//import React from 'react'

const Product = () => {
    const proObj=[{
        name:"Adidas",
        price:"900",
        strikerPrice:"1500"
    },
    {
        name:"Puma",
        price:"1000",
        strikerPrice:"2000"
    },
    {
        name:"Nike",
        price:"2390",
        strikerPrice:"2500"
    }
]
  return (
    <div>
        {proObj.map((item) =>{
            return (
                <>
            <div className="containerCard">
            <img src={shoe} className="imageShoes"/>
            <h3 className="headingShoe">{item.name}</h3>
            <div className="PriceContainer"><h4 className="priceShoe"/>${item.price}</div>
            <strike className="strikeShoe">${item.StrikePrice}</strike>
        </div>
                </>
            )
        } )}
       </div>
  )
}

export default Product