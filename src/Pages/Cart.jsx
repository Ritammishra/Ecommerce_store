  import React, { useState, useEffect } from 'react';
  import { useSelector, useDispatch } from 'react-redux';
  import { remove, updateQuantity } from '../store/cartSlice';

  const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    // const [quantity, setQuantity] = useState(1)

    const calculateTotalPrice = () => {
      let total = 0;
      products.forEach(product => {
        total += (product.price *  1);
      });
      setTotalPrice(total);
    };

    useEffect(() => {
      calculateTotalPrice();
    }, [products]);

    const handleRemove = (productId) => {
      dispatch(remove(productId));

    };

    return (
      <section>
        <div>
          <h1>Shopping Cart</h1>
        </div>
        <div className="flex flex-row justify-center mt-6">
          <div className="w-2/5 my-5">
            {products.map((product) => (
              <div className="flex" key={product.id}>
                <div className="w-16">
                  <img src={product.image} alt="images" />
                </div>
                <div>
                  <div className="w-48 p-2">
                    <p>{product.title}</p>
                    <p>{product.category}</p>
                    {/* <select id="quantity" onChange={handleOnchange}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select> */}
                  </div>
                </div>
                <div>
                  <p>${product.price}</p>
                  <a href="#" className="text-red-600" onClick={() => handleRemove(product.id)}>Remove</a>
                </div>
              </div>
            ))}
            <div>
              <p>Total Price: ${Math.floor(totalPrice)}</p>
            </div>
          </div>
          <div />
        </div>
      </section>  
    );
  };

  export default Cart;
