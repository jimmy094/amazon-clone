import { CheckOutlined } from '@material-ui/icons';
import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from "./StateProvider";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment__container'>
                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payemtn__title'>
                        <h3>Delivery address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React St</p>
                        <p>New York, NY</p>
                    </div>
                </div>


                {/* review items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
           
                </div>


                {/* payment method */}
                <div className='payment__section'>
                    

                </div>
            </div>
        </div>
    )
}

export default Payment;
