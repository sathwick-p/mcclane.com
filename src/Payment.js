import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from "./StateProvider"
import "./Payment.css"
import {Link, useNavigate} from "react-router-dom"
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal, newBasket } from './reducer';
import {db} from "./firebase"
import Product from './Product';

function Payment() {
    const navigate = useNavigate();
    const [{basket, user}, dispatch] = useStateValue();
    const handleSubmit = async(event) => {
        console.log("items",basket);
        function generateRandomNumber() {
            var minm = 100000;
            var maxm = 999999;
            return Math.floor(Math
            .random() * (maxm - minm + 1)) + minm;
        }
        let output = generateRandomNumber();
        function ErrorDetection() {
            if(basket.length==0){
                alert("Basket is empty");
                return 0;
            }
            if(basket.length!=0){
                return 1;
            }
            if(user.email == ""){
                alert("Login required");
                return 0;
            }
            if(user.email != ""){
                return 1;
            }
        }
        // console.log(output)
        let emptyBasket = ErrorDetection();
        if(emptyBasket!=0){
            db.collection("users").doc(user?.email).collection("orders").doc(''+output).set({
                basket:basket
            })
            dispatch({
                type : 'EMPTY_BASKET'
            })
            navigate('/orders')
        }
    }
    return (
    <div className="payment">
        <div className="payment_container">
            <h1>
                Checkout (
                    <Link to='/checkout'>{basket?.length} items</Link>
                )
            </h1>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address</h3>
                </div>
            
            <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>PES University</p>
                    <p>Bengaluru, Karnataka, India</p>
            </div>
            </div>
            
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and delivery</h3>
                    
                </div>
                <div className="payment_items">
                    {basket.map(item => (
                        <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                </div>
                
            </div>
            
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment_details">
                    <div className="payment_priceContainer">
                        <CurrencyFormat
                            renderText={(value) => (
                                <h3>Order Total: {value}</h3>    
                            )}
                            decimalScale={2}
                            value = {getBasketTotal(basket)}
                            displayType = {"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />
                        <button onClick={handleSubmit} className="buyNowbtn">
                            <span>
                                Buy Now
                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Payment