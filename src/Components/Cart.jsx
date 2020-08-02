import React from 'react'

export default function Cart(props) {
    return (
        <div className="card" >
        <div className="card-body text-center" >
          <h5 className="card-title">Total Price: 
          <p>${props.totalPrice}</p>
          </h5>
        </div>
      </div>
    )
}
