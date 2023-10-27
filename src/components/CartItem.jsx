
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    // <div>

    //   <div>

    //     <div>
    //       <img src={item.image} />
    //     </div>
    //     <div>
    //       <h1>{item.title}</h1>
    //       <h1>{item.description}</h1>
    //       <div>
    //         <p>{item.price}</p>
    //         <div
    //         onClick={removeFromCart}>
    //           <FcDeleteDatabase/>
    //         </div>
    //       </div>

    //     </div>


    //   </div>

    // </div>
    <div className="border border-gray-300 rounded-lg p-4 m-4 flex items-center">
  <div className="mr-4">
    <img src={item.image} className="w-16 h-16" alt={item.title} />
  </div>
  <div>
    <h1 className="text-lg font-semibold">{item.title}</h1>
    <p className="text-gray-600">{item.description}</p>
    <div className="flex items-center justify-between mt-2">
      <p className="text-indigo-600 font-semibold">${item.price}</p>
      <div onClick={removeFromCart} className="text-red-600 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  </div>
</div>

  );
};

export default CartItem;
