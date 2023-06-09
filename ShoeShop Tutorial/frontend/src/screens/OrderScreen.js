import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/LoadingError/Error";
import { getOrderDetails } from "../Redux/Actions/OrderActions";


const OrderScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const orderId = match.params.id
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin;
   //calculate
   const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  };

  cart.itemsPrice = addDecimals (
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  cart.shippingPrice = addDecimals(cart.itemsPrice > 500 ? 0: 50)
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) + 
    Number(cart.taxPrice)
  ).toFixed(2)


  useEffect(() => {
    dispatch(getOrderDetails(orderId))
  }, [dispatch, orderId]) 

  const placeOrderHandler = (e) => {
    e.preventDefault();
  };

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <>
      <Header />
      <div className="container">
        {/* {
          loading ? (<loading />) : error ? (<Message variant="alert-danger">{error}</Message>) :
          (
            <>
            </>
          )
        } */}
              <div className="row  order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Customer</strong>
                </h5>
                <p>Admin </p>
                <p>
                  <a href={`mailto:admin@example.com`}>admin@example.com</a>
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-truck-moving"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Order info</strong>
                </h5>
                <p>Shipping: {cart.shippingAddress.country}</p>
                <p>Pay method: Paypal</p>

                <div className="bg-info p-2 col-8">
                  <p className="text-white text-center text-sm-start">
                    Paid At: {date}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Deliver to</strong>
                </h5>
                <p>
                  Address: {cart.shippingAddress.city}, {" "} 
                  {cart.shippingAddress.address}, {" "}
                  {cart.shippingAddress.postalCode}
                </p>
                <div className="bg-success p-1 col-6">
                  <p className="text-white text-center text-sm-start">
                    Accepted
                  </p>
                </div>
              </div>
            </div>
          </div>
              </div>

              <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            {
              cart.cartItems.length === 0 ? (
                <Message variant="alert-info mt-5">Your cart is empty</Message>
              )
              :
              (
                <>
                {
                  cart.cartItems.map((item, index) => (
                  <div className="order-product row" key={index}>
                    <div className="col-md-3 col-6">
                      <img src={item.image} alt= {item.name} />
                    </div>
                  <div className="col-md-5 col-6 d-flex align-items-center">
                    <Link Link to={`/products/${item.product}`}>
                    <h6>{item.name}</h6>
                    </Link>
                  </div>
                  <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                    <h4>QUANTITY</h4>
                    <h6>{item.qty}</h6>
                  </div>
                  <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                    <h4>SUBTOTAL</h4>
                    <h6>$ {item.qty * item.price}</h6>
                  </div>
                 </div>
                  ))
                }
                </>
              )
            }
    

            
          </div>
          {/* total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>$ {cart.itemsPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  <td>$ {cart.shippingPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>$ {cart.taxPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>$ {cart.totalPrice}</td>
                </tr>
              </tbody>
            </table>
            {
              cart.cartItems.length === 0 ? null : (
            <div className="col-12">
                <PayPalButton amount ={cart.totalPrice}/>
            </div>
              )
              }
            {/* <div className="my-3 col-12">
                <Message variant="alert-danger">{error}</Message>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderScreen;
