import { addToCart } from '@/redux/slices/cartSlice'
import { Favorite, ShoppingBagOutlined, ShoppingCart } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'



export default function Product({ product }) {
    const dispatch = useDispatch();

    const handleAddItemToCart = () => {
        // call add to cart reducer
        dispatch(addToCart(product))
        toast.success('Product Added Successfully !')
        console.log(product)
    }
    return (
      
        <div className="flex flex-col  shadow-lg rounded-sm ">
            <div className="relative w-full h-48">
                <Image
                    className='rounded-md object-cover'
                    src={product?.media}
                    layout="fill"
                    alt={product.title}
                />
            </div>
            <div className="flex text-sm px-2 mt-2 font-abc flex-row align-center justify-between">
            <span className=" text-card3 font-abc font-semibold text-xl mt-2">
                {product.title}
                
            </span>
            </div>
             <div className="flex flex-row justify-between items-center px-2 mt-2">
                <p className='text-card3 font-abc font-semibold text-xl'>  Ksh {product.totalPrice}</p>
                <span className="flex justify-center font-bold mt-4 mb-3">
                <button
                    onClick={handleAddItemToCart}
                    className="bg-card3 md:bg-card3 lg:bg-card3 text-white md:text-white rounded-md md:rounded-lg py-1 px-6 transform  transition-colors duration-300 hover:bg-lavender"
                    style={{ cursor: 'pointer' }}
                >
                    <ShoppingCart />
                    Add to Cart
                </button>
            </span>
             </div>
        </div>


    )
}
