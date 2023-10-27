import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
  //   <div>
  // {
  //   cart.length > 0  ? 
  //   (<div>


  //     <div>
  //       {
  //         cart.map( (item,index) => {
  //           return <CartItem key={item.id} item={item} itemIndex={index} />
  //         } )
  //       }
  //     </div>

  //     <div>

  //       <div>
  //         <div>Your Cart</div>
  //         <div>Summary</div>
  //         <p>
  //           <span>Total Items: {cart.length}</span>
  //         </p>
  //       </div>

  //       <div>
  //         <p>Total Amount: ${totalAmount}</p>
  //         <button>
  //           CheckOut Now
  //         </button>
  //       </div>

  //     </div>


  //   </div>) : 
  //   (<div>
  //     <h1>Cart Empty</h1>
  //     <Link to={"/"}>
  //       <button>
  //         Shop Now
  //       </button>
  //     </Link>
  //   </div>)
  // }
  //   </div>
  <div className="flex flex-col items-center justify-center">
  {cart.length > 0 ? (
    <div className="flex flex-col justify-center items-center space-x-4 mt-8">
      <div className="w-2/3">
        {cart.map((item, index) => (
          <CartItem key={item.id} item={item} itemIndex={index} />
        ))}
      </div>
      <div className="w-1/3">
        <div className="border p-4 rounded-md shadow-md">
          <div className="text-xl font-semibold mb-4">Your Cart</div>
          <div className="border-t-2 border-b-2 border-gray-300 py-2">
            <p className="text-gray-600">Total Items: {cart.length}</p>
          </div>
          <div className="py-2">
            <p className="text-xl font-semibold">Total Amount: ${totalAmount}</p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full mt-4">
              Check Out Now
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center mt-8">
      <h1 className="text-2xl font-semibold">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-full mt-4">
          Shop Now
        </button>
      </Link>
    </div>
  )}
</div>

  );
};

export default Cart;
