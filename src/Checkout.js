import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg" alt="" />  
                <div>
                    <h2 className="checkout__title">
                        Your shopping cart
                    </h2>
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                </div>
            </div>

                <div className="checkout__right">
                    <Subtotal />
                </div>



        </div>
    )
}

export default Checkout
