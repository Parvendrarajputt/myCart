import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto my-8 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="md:sticky md:top-20">
        {cart.length > 0 ? (
          <div className="space-y-6">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
        ) : (
    
            <div className="flex items-center justify-center  ">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <Link to="/">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
          
        
        )}
      </div>
      {cart.length > 0 && (
        <div className="md:sticky md:top-20">
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="text-xl font-bold mb-4">Your Cart Summary</h2>
            <p className="mb-2">Total items: {cart.length}</p>
          </div>
          <div className="bg-gray-100 p-4 mt-4 rounded-md">
            <p className="text-xl font-bold mb-4">Total Amount:</p>
            <p className="text-2xl font-bold text-green-600">${totalAmount.toFixed(2)}</p>
            <Link to="/checkout">
              <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
