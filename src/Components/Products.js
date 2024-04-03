import React, { useState, useEffect, } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';


const Products = () => {

    const dispatch = useDispatch()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                const items = res.data
                setProducts(items)
                console.log(items);
            })
            .catch((err) => {   
                console.log(err);
            })
    }, [])

    const handleAdd = (products) => {
        dispatch(add(products))
    }

    return (
    <>
    <div className="flex" style={{ display: "flex", flexWrap: "wrap", backgroundColor: "#0E2A47", justifyContent: "center" }}>
                <div className="flex flex-wrap justify-center">
                {
                        products.map((item, index) => (
                            <div key={index} className=" w-80 p-4 m-2 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out mt-4">
                                <img className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={item.image} />
                                <div className="text-gray-800 p-4">
                                    <h2 className="text-xl truncate font-semibold">{item.title}</h2>
                                    <p className="truncate">{item.description}</p>
                                    <p className="truncate text-xl">${item.price}</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <button onClick={()=> handleAdd(item)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Add Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    </>
    )
}

export default Products
