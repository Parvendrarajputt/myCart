import React from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success('Item Removed');
  };

  return (
    <div className="flex items-start mb-4 p-4 md:p-6 lg:p-8">
      <div className="w-18 h-18 overflow-hidden rounded-md border-2 border-gray-200 mr-4">
        <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
        <p className="text-sm text-gray-600">{item.description}</p>
        <div className="flex items-center mt-2">
          <p className="text-lg font-semibold text-green-600">${item.price.toFixed(2)}</p>
          <div className="ml-4 cursor-pointer text-red-500" onClick={removeFromCart}>
            <RiDeleteBin5Fill className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
