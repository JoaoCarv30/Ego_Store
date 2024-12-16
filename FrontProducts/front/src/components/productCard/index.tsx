import React from 'react'
import { FaWhatsapp } from "react-icons/fa";


interface ProductCardProps {
    name: string
    price: number
    title: string
    description: string
    image: string
    user: {
        name: string
        avatar: string
        
    }
    onclick?: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, title, description, user, image, onclick = () => {} }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm">
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-primary text-white px-2 py-1 m-2 rounded-md text-sm font-bold">
                    ${price.toFixed(2)}
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{name}</p>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">{description}</p>
                <div className="mt-4 flex items-center">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full mr-4"
                    />
                    <div className="text-sm">
                        <p className="text-gray-900 font-semibold">Registered by</p>
                        <p className="text-gray-600">{user.name}</p>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-gray-100">
                <button
                    onClick={onclick} 
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300 transform hover:scale-105"
                >
                    <FaWhatsapp className="inline" />
                    <span className="ml-2">Contate o vendedor</span>
                </button>
            </div>
        </div>
    )
}

export default ProductCard